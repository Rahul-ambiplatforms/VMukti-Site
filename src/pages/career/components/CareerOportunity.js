import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Textarea,
  useBreakpointValue,
  Spinner,
  Alert,
  AlertIcon,
  useToast, // <-- NEW: Import useToast
} from "@chakra-ui/react";
import { FiPaperclip } from "react-icons/fi";
import { Helmet } from "react-helmet";
import { getJobs } from "../../../api/jobs";
import { useNavigate } from "react-router-dom";

const CareerOportunity = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast(); // <-- NEW: Initialize useToast

  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- NEW: Submitting state
  const [form, setForm] = useState({
    fullName: "",
    yearsOfExperience: "",
    email: "",
    about: "",
    phone: "",
    currentCompany: "",
  });
  const [resumeName, setResumeName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch jobs from API
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await getJobs(1, 50, "OPEN"); // Get first 50 open jobs
        if (response.status === "success") {
          setJobs(response.data.jobs || []);
        } else {
          setError("Failed to fetch jobs");
        }
      } catch (err) {
        // console.error("Error fetching jobs:", err);
        // setError("Failed to load job opportunities");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleResumePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      // Replaced alert with toast for file size warning
      toast({
        title: "File too large",
        description: "Resume file must be <= 2MB.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      e.target.value = "";
      setResumeFile(null);
      setResumeName("");
      return;
    }
    setResumeFile(file);
    setResumeName(file.name);
  };

  const handleSubmit = async () => {
    // Basic validation check for required fields (assuming * fields are required)
    if (
      !form.fullName ||
      !form.yearsOfExperience ||
      !form.email ||
      !form.phone ||
      !form.about
    ) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill out all fields marked with *.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return; // Exit if validation fails
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("yearsOfExperience", form.yearsOfExperience);
    formData.append("email", form.email);
    formData.append("about", form.about);
    formData.append("phone", form.phone);
    formData.append("currentCompany", form.currentCompany);
    formData.append("jobTitle", selectedJob?.jobRole || "");
    if (resumeFile) formData.append("resume", resumeFile);

    try {
      const response = await fetch(
        // "http://localhost:5000/api/send-email-carreer",
        "https://vmukti.com/backend/api/send-email-carreer",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        let errorData = {};
        try {
          errorData = await response.json();
        } catch (e) {
          // response body is not json, ignore
        }
        throw new Error(errorData.message || "Failed to submit application.");
      }

      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate("/careers-thank-you");
      onClose();

      // Reset form on success
      setForm({
        fullName: "",
        yearsOfExperience: "",
        email: "",
        about: "",
        phone: "",
        currentCompany: "",
      });
      setResumeFile(null);
      setResumeName("");
    } catch (err) {
      // Error Logic
      toast({
        // <-- NEW: Use toast for error
        title: "Submission Failed",
        description:
          err.message ||
          "An error occurred while sending your application. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false); 
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    onOpen();
  };

  const JobCard = ({ job }) => (
    <Flex
      justify="space-between"
      align={{ base: "flex-start", md: "center" }}
      p={6}
      borderBottomWidth="1px"
      borderColor="#3F77A5"
      direction={{ base: "column", md: "row" }}
      w="100%"
    >
      <Flex align="center" mb={{ base: 4, md: 0 }} flex="1.5" gap="4">
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 28.094C0 30.4956 0.147258 32.1022 2.06616 33.6841C2.44831 33.9991 2.96593 34.3144 3.43685 34.501C4.10194 34.7644 4.91057 34.9982 5.81055 34.9982H23.379C24.2392 34.9982 25.1024 34.7885 25.706 34.5226C26.3465 34.2404 26.9501 33.92 27.4649 33.4102C29.2553 31.6371 29.1896 30.0933 29.1896 27.8204C29.1896 26.4305 28.9389 24.9395 28.67 23.7599C28.1064 21.2872 26.8769 18.7052 24.4974 17.5417C23.6063 17.1059 22.5462 16.8828 21.465 16.8828C19.9592 16.8828 16.6484 21.5801 10.7314 18.5245C9.75665 18.021 8.6286 16.8828 7.51957 16.8828C3.47777 16.8828 1.19481 20.3272 0.506878 23.8838C0.377601 24.5519 0.238506 25.1943 0.156145 25.8573C0.0646902 26.5921 0 27.3096 0 28.0938L0 28.094Z"
              fill="#3F77A5"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.94552 7.99803C5.94552 9.07286 5.92857 9.54481 6.20407 10.6105C6.28323 10.9168 6.34926 11.0954 6.44867 11.3914L6.91577 12.4281C8.97986 16.2164 13.5545 17.9482 17.8117 16.1729C18.3641 15.9425 19.3054 15.3571 19.737 14.9536C20.7036 14.0498 21.4611 13.2963 22.0562 12.009C23.7751 8.29058 22.5861 4.05089 19.3742 1.61054C18.5697 0.999288 17.58 0.527959 16.6105 0.272608C16.0261 0.118633 15.4018 0.0272815 14.768 0H13.9573C12.8201 0.048776 11.6941 0.30392 10.7525 0.773699C8.08319 2.10574 5.94552 4.94229 5.94552 7.99813V7.99803Z"
              fill="#3F77A5"
            />
          </svg>
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="16px" color="#3F77A5">
            {job.jobRole}
          </Text>
          <Box w="16px" h="2.5px" borderRadius="full" bg="#3F77A5" />
          <Text fontSize="16px" fontWeight="500" color="#000" mt="5%">
            {job.employmentType}
          </Text>
        </Box>
      </Flex>
      <Box flex="1" mb={{ base: 4, md: 0 }}>
        <Text fontWeight="700" fontSize="16px">
          Location
        </Text>
        <Box w="16px" h="2.5px" borderRadius="full" bg="#3F77A5" />
        <Text fontSize="16px" fontWeight="400" mt="2%">
          {job.location}
        </Text>
      </Box>
      <Box flex="1" mb={{ base: 4, md: 0 }}>
        <Text fontWeight="bold">Year of Experience</Text>
        <Box w="16px" h="2.5px" borderRadius="full" bg="#3F77A5" />
        <Text fontSize="16px" fontWeight="400" mt="2%">
          {job.experience}
        </Text>
      </Box>
      <Box flex="1" mb={{ base: 4, md: 0 }}>
        <Text fontWeight="bold">Openings</Text>
        <Box w="16px" h="2.5px" borderRadius="full" bg="#3F77A5" />
        <Text fontSize="16px" fontWeight="400" mt="2%">
          {job.openings}
        </Text>
      </Box>
      <Button
        colorScheme="gray"
        variant="solid"
        bg="#E7E7E7"
        fontSize="16px"
        px="32px"
        borderRadius="20px"
        onClick={() => handleApplyClick(job)}
      >
        Apply
      </Button>
    </Flex>
  );

  const modalSize = useBreakpointValue({ base: "full", md: "3xl", lg: "4xl" });

  return (
    <>
      <Helmet>
        <title>Career Opportunities at Vmukti</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Vmukti. Join our innovative team and contribute to cutting-edge technology solutions. Apply now!"
        />
      </Helmet>
      <Box mt="2%">
        <Box mx="auto" bg="white" borderRadius="24px" p="8">
          <Flex
            justify="space-between"
            align="center"
            p={6}
            borderBottomWidth="1px"
            borderColor="#3F77A5"
          >
            <Box>
              <Heading as="h2" fontSize="36px">
                Current{" "}
                <Text as="span" color="#3F77A5">
                  Opening
                </Text>
              </Heading>
              <Text fontSize="16px" fontWeight="500" mt={4}>
                {loading ? "Loading..." : `${jobs.length} Jobs found`}
              </Text>
            </Box>
          </Flex>

          {loading ? (
            <Flex justify="center" align="center" py={8}>
              <Spinner size="xl" color="#3F77A5" />
            </Flex>
          ) : error ? (
            <Alert status="error" borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          ) : jobs.length === 0 ? (
            <Box textAlign="center" py={8}>
              <Text fontSize="lg" color="gray.500">
                No job opportunities available at the moment.
              </Text>
            </Box>
          ) : (
            <VStack spacing={0} align="stretch">
              {jobs.slice(0, 10).map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </VStack>
          )}
        </Box>

        {/* Application Modal */}
        {selectedJob && (
          <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
            <ModalOverlay />
            <ModalContent borderRadius="24px">
              <ModalHeader
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
              >
                Submit your{" "}
                <Text as="span" color="#DB7B3A">
                  Application
                </Text>
              </ModalHeader>
              <ModalCloseButton />

              <ModalBody pb={6}>
                <Flex align="start" mb={6} direction="column" gap="4">
                  <Box>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM5 5L2.87868 7.12132L27.8787 32.1213L30 30L32.1213 27.8787L7.12132 2.87868L5 5Z"
                        fill="#3F77A5"
                      />
                    </svg>
                  </Box>
                  <Text color="#696969" fontSize="16px" fontWeight="500">
                    {selectedJob.keyResponsibilities?.length > 0
                      ? selectedJob.keyResponsibilities.join(", ")
                      : selectedJob.keySkills?.length > 0
                      ? selectedJob.keySkills.join(", ")
                      : "No additional details available."}
                  </Text>
                </Flex>

                {/* Selected Job Info */}
                <Flex
                  justify="space-between"
                  align={{ base: "flex-start", md: "center" }}
                  p={4}
                  borderWidth="1px"
                  borderColor="gray.200"
                  borderRadius="24px"
                  mb={6}
                  direction={{ base: "column", md: "row" }}
                  w="100%"
                >
                  <Flex
                    align="center"
                    gap="4"
                    mb={{ base: 4, md: 0 }}
                    flex="1.5"
                  >
                    <Box>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="35"
                        viewBox="0 0 30 35"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 28.094C0 30.4956 0.147258 32.1022 2.06616 33.6841C2.44831 33.9991 2.96593 34.3144 3.43685 34.501C4.10194 34.7644 4.91057 34.9982 5.81055 34.9982H23.379C24.2392 34.9982 25.1024 34.7885 25.706 34.5226C26.3465 34.2404 26.9501 33.92 27.4649 33.4102C29.2553 31.6371 29.1896 30.0933 29.1896 27.8204C29.1896 26.4305 28.9389 24.9395 28.67 23.7599C28.1064 21.2872 26.8769 18.7052 24.4974 17.5417C23.6063 17.1059 22.5462 16.8828 21.465 16.8828C19.9592 16.8828 16.6484 21.5801 10.7314 18.5245C9.75665 18.021 8.6286 16.8828 7.51957 16.8828C3.47777 16.8828 1.19481 20.3272 0.506878 23.8838C0.377601 24.5519 0.238506 25.1943 0.156145 25.8573C0.0646902 26.5921 0 27.3096 0 28.0938L0 28.094Z"
                          fill="#3F77A5"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.94552 7.99803C5.94552 9.07286 5.92857 9.54481 6.20407 10.6105C6.28323 10.9168 6.34926 11.0954 6.44867 11.3914L6.91577 12.4281C8.97986 16.2164 13.5545 17.9482 17.8117 16.1729C18.3641 15.9425 19.3054 15.3571 19.737 14.9536C20.7036 14.0498 21.4611 13.2963 22.0562 12.009C23.7751 8.29058 22.5861 4.05089 19.3742 1.61054C18.5697 0.999288 17.58 0.527959 16.6105 0.272608C16.0261 0.118633 15.4018 0.0272815 14.768 0H13.9573C12.8201 0.048776 11.6941 0.30392 10.7525 0.773699C8.08319 2.10574 5.94552 4.94229 5.94552 7.99813V7.99803Z"
                          fill="#3F77A5"
                        />
                      </svg>
                    </Box>
                    <Box>
                      <Text fontWeight="600" color="#3F77A5">
                        {selectedJob.jobRole}
                      </Text>
                      <Text fontSize="16px" color="#000">
                        {selectedJob.employmentType}
                      </Text>
                    </Box>
                  </Flex>
                  <Box flex="1" my={{ base: 2, md: 0 }}>
                    <Text fontWeight="bold">Location</Text>
                    <Text fontSize="sm" color="gray.600">
                      {selectedJob.location}
                    </Text>
                  </Box>
                  <Box flex="1">
                    <Text fontWeight="bold">Year of Experience</Text>
                    <Text fontSize="sm" color="gray.600">
                      {selectedJob.experience}
                    </Text>
                  </Box>
                </Flex>

                {/* Form */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
                  <FormControl>
                    <Input
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      bg="#E7E7E7"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      name="yearsOfExperience"
                      value={form.yearsOfExperience}
                      onChange={handleChange}
                      placeholder="Year of experience *"
                      bg="#E7E7E7"
                    />
                  </FormControl>
                  <FormControl
                    gridColumn={{ md: "3" }}
                    gridRow={{ md: "1 / span 2" }}
                  >
                    <Textarea
                      name="about"
                      value={form.about}
                      onChange={handleChange}
                      placeholder="Tell us about you *"
                      bg="#E7E7E7"
                      h="100px"
                      resize="none"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      type="email"
                      bg="#E7E7E7"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      name="currentCompany"
                      value={form.currentCompany}
                      onChange={handleChange}
                      placeholder="current company name"
                      bg="#E7E7E7"
                    />
                  </FormControl>
                  <FormControl>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      type="tel"
                      bg="#E7E7E7"
                    />
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <Input
                        placeholder={resumeName || "Upload resume"}
                        isReadOnly
                        bg="#E7E7E7"
                      />
                      <InputRightElement
                        cursor="pointer"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Icon as={FiPaperclip} color="gray.500" />
                      </InputRightElement>
                    </InputGroup>
                    <input
                      ref={fileInputRef}
                      onChange={handleResumePick}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                    />
                    <Text fontSize="10px" color="gray.500" mt={1}>
                      MAX-2MB
                    </Text>
                  </FormControl>
                  <Flex justify="flex-end" mt={8}>
                    <Button
                      color="white"
                      w="146px"
                      h="50px"
                      borderRadius="20px"
                      px="24px"
                      bg="#3F77A5"
                      onClick={handleSubmit}
                      isLoading={isSubmitting} // <-- NEW: Show spinner and disable during submission
                      loadingText="Submitting" // Optional text while loading
                      _hover={{ bg: isSubmitting ? "#3F77A5" : "#335f8a" }}
                    >
                      Submit
                    </Button>
                  </Flex>
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
};

export default CareerOportunity;
