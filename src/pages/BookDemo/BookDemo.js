import { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Text,
    Textarea,
    VStack,
    SimpleGrid,
    useToast,
    Checkbox,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import PageContentWrapper from "../../components/PageContentWrapper";
import HeadingAnimation from "../../components/Animation/Text/HeadingAnimation";

export default function BookDemo() {
    const toast = useToast();
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);
    const [countryCodes, setCountryCodes] = useState([]);
    const [loadingCountries, setLoadingCountries] = useState(true);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        countryCode: "+91",
        mobileNumber: "",
        requirements: "",
        agreedToTerms: false,
    });

    const [errors, setErrors] = useState({});

    // Fetch country codes from API
    useEffect(() => {
        const fetchCountryCodes = async () => {
            try {
                setLoadingCountries(true);
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name,idd,flag');
                const countries = await response.json();
                
                const formattedCountries = countries
                    .filter(country => country.idd && country.idd.root && country.idd.suffixes)
                    .map(country => {
                        const dialCode = country.idd.root + (country.idd.suffixes[0] || '');
                        return {
                            code: dialCode,
                            country: country.name.common,
                            flag: country.flag
                        };
                    })
                    .filter(country => country.code && country.code !== '+')
                    .sort((a, b) => {
                        // Prioritize India first, then alphabetical
                        if (a.country === 'India') return -1;
                        if (b.country === 'India') return 1;
                        return a.country.localeCompare(b.country);
                    });

                setCountryCodes(formattedCountries);
            } catch (error) {
                console.error('Error fetching country codes:', error);
                // Fallback to a few common country codes
                setCountryCodes([
                    { code: "+91", country: "India", flag: "🇮🇳" },
                    { code: "+1", country: "United States", flag: "🇺🇸" },
                    { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
                    { code: "+61", country: "Australia", flag: "🇦🇺" },
                    { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
                ]);
            } finally {
                setLoadingCountries(false);
            }
        };

        fetchCountryCodes();
    }, []);

    // Calculate min and max dates (tomorrow to 3 months from now)
    const getMinDate = () => {
        const tomorrow = new Date(currentDate);
        tomorrow.setDate(tomorrow.getDate() + 2);
        tomorrow.setHours(0, 0, 0, 0);
        return tomorrow;
    };

    const getMaxDate = () => {
        const maxDate = new Date(currentDate);
        maxDate.setMonth(maxDate.getMonth() + 3);
        maxDate.setHours(23, 59, 59, 999);
        return maxDate;
    };

    const minDate = getMinDate();
    const maxDate = getMaxDate();

    // Check if a date is a Sunday
    const isSunday = (date) => {
        return date.getDay() === 0;
    };

    // Check if date is within allowed range
    const isDateInRange = (date) => {
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        return checkDate >= minDate && checkDate <= maxDate;
    };

    // Check if date is disabled (Sunday or out of range)
    const isDateDisabled = (date) => {
        return isSunday(date) || !isDateInRange(date);
    };

    // Generate time slots from 9:00 AM to 6:00 PM in 30-minute intervals
    const generateTimeSlots = () => {
        const slots = [];
        const startHour = 9;
        const startMinute = 30;
        const endHour = 18;
        const endMinute = 0;

        let currentHour = startHour;
        let currentMinute = startMinute;

        while (
            currentHour < endHour ||
            (currentHour === endHour && currentMinute <= endMinute)
        ) {
            const hour12 = currentHour > 12 ? currentHour - 12 : currentHour;
            const ampm = currentHour >= 12 ? "PM" : "AM";
            const displayHour = hour12 === 0 ? 12 : hour12;
            const displayMinute = currentMinute.toString().padStart(2, "0");

            slots.push(`${displayHour}:${displayMinute} ${ampm}`);

            currentMinute += 30;
            if (currentMinute >= 60) {
                currentMinute = 0;
                currentHour += 1;
            }
        }

        return slots;
    };

    const timeSlots = generateTimeSlots();

    // Get calendar days for current month view
    const getCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());

        const endDate = new Date(lastDay);
        endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

        const days = [];
        const current = new Date(startDate);

        while (current <= endDate) {
            days.push(new Date(current));
            current.setDate(current.getDate() + 1);
        }

        return days;
    };

    const calendarDays = getCalendarDays();

    // Navigate to previous month
    const handlePrevMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() - 1);

        // Don't go before current month
        if (newMonth >= new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)) {
            setCurrentMonth(newMonth);
        }
    };

    // Navigate to next month
    const handleNextMonth = () => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(newMonth.getMonth() + 1);

        // Don't go beyond 3 months from now
        const threeMonthsFromNow = new Date(currentDate);
        threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);

        if (newMonth <= threeMonthsFromNow) {
            setCurrentMonth(newMonth);
        }
    };

    // Check if we can navigate to previous month
    const canGoPrev = () => {
        const prevMonth = new Date(currentMonth);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        return prevMonth >= new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    };

    // Check if we can navigate to next month
    const canGoNext = () => {
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        const threeMonthsFromNow = new Date(currentDate);
        threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
        return nextMonth <= threeMonthsFromNow;
    };

    const handleDateClick = (date) => {
        if (!isDateDisabled(date)) {
            setSelectedDate(date);
            setSelectedTime(null); // Reset time when date changes
        }
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Clear error when user starts typing or changes country code
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
        
        // Clear mobile number error when country code changes
        if (name === "countryCode" && errors.mobileNumber) {
            setErrors((prev) => ({ ...prev, mobileNumber: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Mobile number validation
        if (formData.mobileNumber.trim()) {
            const cleanNumber = formData.mobileNumber.replace(/\s+/g, '');
            
            if (formData.countryCode === "+91") {
                // India specific validation - exactly 10 digits
                if (!/^\d{10}$/.test(cleanNumber)) {
                    newErrors.mobileNumber = "Indian mobile number must be exactly 10 digits";
                }
            } else {
                // General validation for other countries - 7-15 digits
                if (!/^\d{7,15}$/.test(cleanNumber)) {
                    newErrors.mobileNumber = "Please enter a valid mobile number (7-15 digits)";
                }
            }
        }

        if (!selectedDate) {
            newErrors.date = "Please select a date";
        }

        if (!selectedTime) {
            newErrors.time = "Please select a time slot";
        }

        if (!formData.agreedToTerms) {
            newErrors.terms = "You must agree to the terms to proceed";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast({
                title: "Validation Error",
                description: "Please fill in all required fields",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);

        try {
            const formattedDate = selectedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            const response = await fetch(
                "https://vmukti.com/backend/api/send-email",
                // "http://localhost:5000/api/send-email",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        email: formData.email,
                        mobileNumber: `${formData.countryCode} ${formData.mobileNumber}`,
                        message: formData.requirements,
                        selectedDate: formattedDate,
                        selectedTime: selectedTime,
                        formType: "Demo Booking",
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Booking Submitted!",
                    description: "We'll contact you shortly to confirm your demo.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });

                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    countryCode: "+91",
                    mobileNumber: "",
                    requirements: "",
                    agreedToTerms: false,
                });
                setSelectedDate(null);
                setSelectedTime(null);
            } else {
                throw new Error(data.error || "Failed to submit booking");
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                title: "Submission Failed",
                description: error.message || "Please try again later.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (date) => {
        return date.getDate();
    };

    const isSameDay = (date1, date2) => {
        if (!date1 || !date2) return false;
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            <Helmet>
                <title>Book a Cloud VMS Demo | VMukti Solutions</title>
                <meta
                    name="description"
                    content="Schedule a personalized demo of VMukti's Cloud VMS solution. Choose your preferred date and time to see our AI-powered video surveillance platform in action."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.vmukti.com/book-demo" />
            </Helmet>

            <Box bg="#E7E7E7" minH="100vh" pb={10}>
                <PageContentWrapper>
                    <Box mt={{ base: 4, md: 8 }} mb={8}>
                        <HeadingAnimation>
                            <Heading
                                as="h1"
                                fontSize={{ base: "28px", md: "42px" }}
                                fontWeight="700"
                                color="#3F77A5"
                                textAlign="center"
                                mb={2}
                            >
                                Book a Cloud VMS Demo
                            </Heading>
                        </HeadingAnimation>
                        <Text
                            textAlign="center"
                            fontSize={{ base: "14px", md: "16px" }}
                            color="#696969"
                        >
                            Schedule a 30-minute demo with our team
                        </Text>
                    </Box>

                    <Flex
                        direction={{ base: "column", lg: "row" }}
                        gap={8}
                        bg="white"
                        borderRadius="24px"
                        p={{ base: 6, md: 8 }}
                        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.08)"
                    >
                        {/* Calendar Section */}
                        <Box flex="1">
                            <Heading
                                as="h2"
                                fontSize={{ base: "20px", md: "24px" }}
                                fontWeight="600"
                                mb={4}
                                color="#3F77A5"
                            >
                                Select a Date & Time
                            </Heading>

                            {/* Month Navigation */}
                            <Flex justify="space-between" align="center" mb={4}>
                                <Button
                                    onClick={handlePrevMonth}
                                    isDisabled={!canGoPrev()}
                                    size="sm"
                                    variant="ghost"
                                    color="#3F77A5"
                                    _hover={{ bg: "#F0F4F8" }}
                                >
                                    <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Button>
                                <Text fontWeight="600" fontSize="16px" color="#3F77A5">
                                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                                </Text>
                                <Button
                                    onClick={handleNextMonth}
                                    isDisabled={!canGoNext()}
                                    size="sm"
                                    variant="ghost"
                                    color="#3F77A5"
                                    _hover={{ bg: "#F0F4F8" }}
                                >
                                    <svg
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.59 1.41L5.17 6L0.59 10.59L2 12L8 6L2 0L0.59 1.41Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </Button>
                            </Flex>

                            {/* Calendar Grid */}
                            <Box>
                                {/* Day Headers */}
                                <SimpleGrid columns={7} spacing={2} mb={2}>
                                    {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
                                        <Text
                                            key={day}
                                            textAlign="center"
                                            fontSize="12px"
                                            fontWeight="600"
                                            color="#696969"
                                        >
                                            {day}
                                        </Text>
                                    ))}
                                </SimpleGrid>

                                {/* Calendar Days */}
                                <SimpleGrid columns={7} spacing={2}>
                                    {calendarDays.map((date, index) => {
                                        const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                                        const disabled = isDateDisabled(date);
                                        const selected = isSameDay(date, selectedDate);

                                        return (
                                            <Button
                                                key={index}
                                                onClick={() => handleDateClick(date)}
                                                isDisabled={disabled}
                                                size="sm"
                                                h="40px"
                                                bg={selected ? "#3F77A5" : "transparent"}
                                                color={
                                                    selected
                                                        ? "white"
                                                        : disabled
                                                            ? "#D0D0D0"
                                                            : isCurrentMonth
                                                                ? "#000000"
                                                                : "#B0B0B0"
                                                }
                                                fontWeight={selected ? "600" : "400"}
                                                borderRadius="8px"
                                                _hover={
                                                    disabled
                                                        ? {}
                                                        : {
                                                            bg: selected ? "#35668E" : "#F0F4F8",
                                                        }
                                                }
                                                cursor={disabled ? "not-allowed" : "pointer"}
                                            >
                                                {formatDate(date)}
                                            </Button>
                                        );
                                    })}
                                </SimpleGrid>
                            </Box>

                            {errors.date && (
                                <Text color="red.500" fontSize="14px" mt={2}>
                                    {errors.date}
                                </Text>
                            )}

                            {/* Time Slots */}
                            {selectedDate && (
                                <Box mt={6}>
                                    <Text fontWeight="600" fontSize="16px" mb={3} color="#3F77A5">
                                        Available Time Slots
                                    </Text>
                                    <SimpleGrid columns={{ base: 3, md: 4 }} spacing={2}>
                                        {timeSlots.map((time) => (
                                            <Button
                                                key={time}
                                                onClick={() => handleTimeClick(time)}
                                                size="sm"
                                                bg={selectedTime === time ? "#3F77A5" : "white"}
                                                color={selectedTime === time ? "white" : "#3F77A5"}
                                                border="1px solid"
                                                borderColor="#3F77A5"
                                                fontWeight={selectedTime === time ? "600" : "400"}
                                                fontSize="14px"
                                                _hover={{
                                                    bg: selectedTime === time ? "#35668E" : "#F0F4F8",
                                                }}
                                            >
                                                {time}
                                            </Button>
                                        ))}
                                    </SimpleGrid>
                                    {errors.time && (
                                        <Text color="red.500" fontSize="14px" mt={2}>
                                            {errors.time}
                                        </Text>
                                    )}
                                </Box>
                            )}
                        </Box>

                        {/* Form Section */}
                        <Box flex="1">
                            <Heading
                                as="h2"
                                fontSize={{ base: "20px", md: "24px" }}
                                fontWeight="600"
                                mb={4}
                                color="#3F77A5"
                            >
                                Enter Details
                            </Heading>

                            <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
                                <FormControl isInvalid={errors.fullName}>
                                    <FormLabel fontSize="14px" fontWeight="500">
                                        Full Name <Text as="span" color="red.500">*</Text>
                                    </FormLabel>
                                    <Input
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your full name"
                                        borderColor="#BECEDC"
                                        _hover={{ borderColor: "#3F77A5" }}
                                        _focus={{ borderColor: "#3F77A5", boxShadow: "0 0 0 1px #3F77A5" }}
                                    />
                                    <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={errors.email}>
                                    <FormLabel fontSize="14px" fontWeight="500">
                                        Email <Text as="span" color="red.500">*</Text>
                                    </FormLabel>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="you@example.com"
                                        borderColor="#BECEDC"
                                        _hover={{ borderColor: "#3F77A5" }}
                                        _focus={{ borderColor: "#3F77A5", boxShadow: "0 0 0 1px #3F77A5" }}
                                    />
                                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                                </FormControl>

                                <FormControl isInvalid={errors.mobileNumber}>
                                    <FormLabel fontSize="14px" fontWeight="500">
                                        Mobile Number
                                    </FormLabel>
                                    <Flex gap={2}>
                                        <Select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleInputChange}
                                            width="200px"
                                            borderColor="#BECEDC"
                                            _hover={{ borderColor: "#3F77A5" }}
                                            _focus={{ borderColor: "#3F77A5", boxShadow: "0 0 0 1px #3F77A5" }}
                                            isDisabled={loadingCountries}
                                        >
                                            {loadingCountries ? (
                                                <option value="+91">Loading...</option>
                                            ) : (
                                                countryCodes.map((country) => (
                                                    <option key={`${country.code}-${country.country}`} value={country.code}>
                                                        {country.flag} {country.code} {country.country}
                                                    </option>
                                                ))
                                            )}
                                        </Select>
                                        <Input
                                            name="mobileNumber"
                                            type="tel"
                                            value={formData.mobileNumber}
                                            onChange={handleInputChange}
                                            placeholder={
                                                formData.countryCode === "+91" 
                                                    ? "Enter 10-digit mobile number" 
                                                    : "Enter mobile number"
                                            }
                                            maxLength={15}
                                            borderColor="#BECEDC"
                                            _hover={{ borderColor: "#3F77A5" }}
                                            _focus={{ borderColor: "#3F77A5", boxShadow: "0 0 0 1px #3F77A5" }}
                                        />
                                    </Flex>
                                    <FormErrorMessage>{errors.mobileNumber}</FormErrorMessage>
                                </FormControl>

                                <FormControl>
                                    <FormLabel fontSize="14px" fontWeight="500">
                                        Message
                                    </FormLabel>
                                    <Textarea
                                        name="requirements"
                                        value={formData.requirements}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your requirements..."
                                        rows={4}
                                        borderColor="#BECEDC"
                                        _hover={{ borderColor: "#3F77A5" }}
                                        _focus={{ borderColor: "#3F77A5", boxShadow: "0 0 0 1px #3F77A5" }}
                                    />
                                </FormControl>

                                <FormControl isInvalid={errors.terms}>
                                    <Checkbox
                                        name="agreedToTerms"
                                        isChecked={formData.agreedToTerms}
                                        onChange={handleInputChange}
                                        colorScheme="blue"
                                        size="sm"
                                    >
                                        <Text fontSize="12px" color="#696969">
                                            By proceeding, you confirm that you have read and agree to VMukti's{" "}
                                            <Text
                                                as="a"
                                                href="/terms-and-conditions"
                                                color="#3F77A5"
                                                textDecoration="underline"
                                            >
                                                Terms of Use
                                            </Text>{" "}
                                            and{" "}
                                            <Text
                                                as="a"
                                                href="/privacy-policy"
                                                color="#3F77A5"
                                                textDecoration="underline"
                                            >
                                                Privacy Notice
                                            </Text>
                                            .
                                        </Text>
                                    </Checkbox>
                                    <FormErrorMessage>{errors.terms}</FormErrorMessage>
                                </FormControl>

                                <Button
                                    type="submit"
                                    bg="#3F77A5"
                                    color="white"
                                    fontWeight="600"
                                    fontSize="16px"
                                    h="48px"
                                    borderRadius="24px"
                                    isLoading={isLoading}
                                    loadingText="Scheduling..."
                                    _hover={{ bg: "#35668E" }}
                                    mt={4}
                                >
                                    Schedule Event
                                </Button>
                            </VStack>
                        </Box>
                    </Flex>
                </PageContentWrapper>
            </Box>
        </>
    );
}
