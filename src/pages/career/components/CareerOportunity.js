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
  useToast,
  textDecoration, // <-- NEW: Import useToast
} from "@chakra-ui/react";
import { FiPaperclip } from "react-icons/fi";
import { Helmet } from "react-helmet";
import { getJobs } from "../../../api/jobs";
import { data, useNavigate } from "react-router-dom";

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
        const response = await getJobs(1, 50, "OPEN");
        if (response.status === "success") {
          setJobs(response.data.jobs || []);
          // console.log("Display all the jobs",response.data.jobs)
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
        // "http://localhost:5000/api/send-email-career",
        "https://vmukti.com/backend/api/send-email-career",
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
    // console.log("Selected job for application:", job);
    // console.log("Key and responsibility", job.skillsAndResponsibilities);
    // console.log("JOB DESCRIPTION", job.jdUrl);
    onOpen();
  };
  // console.log("Key and responsibility",selectedJob.skillsAndResponsibilities);
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
      <Flex gap={3} align="center">
        {job.jdUrl && (
          <Button
            as="a"
            href={job.jdUrl}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="blue"
            variant="outline"
            fontSize="16px"
            px="24px"
            borderRadius="20px"
          >
            View JD
          </Button>
        )}
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
                    {selectedJob.skillsAndResponsibilities &&
                    selectedJob.skillsAndResponsibilities.trim().length > 0
                      ? selectedJob.skillsAndResponsibilities
                      : selectedJob.keyResponsibilities?.length > 0
                      ? selectedJob.keyResponsibilities.join(", ")
                      : selectedJob.keySkills?.length > 0
                      ? selectedJob.keySkills.join(", ")
                      : "No additional details available."}
                  </Text>
                  {selectedJob.jdUrl && (
                    <Box textAlign="center" mt={4}>
                      <Button
                        as="a"
                        href={selectedJob.jdUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        colorScheme="blue"
                        _hover={{ textDecoration: "none", color: "blue.600" }}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        p={4}
                      >
                        <Flex
                          direction="column"
                          align="flex-start"
                          gap={2}
                          _hover={{ textDecoration: "underline" }}
                        >
                          <Box>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="33"
                              height="29"
                              viewBox="0 0 33 29"
                              fill="none"
                            >
                              <path
                                d="M13.8738 0.000551784C13.1802 0.000551784 12.6066 0.575552 12.6066 1.2565V11.9481H9.14822C8.64045 11.9481 8.17063 12.2483 7.97421 12.724C7.78282 13.1869 7.88717 13.7299 8.25042 14.0892L15.6058 21.3633C15.8525 21.6034 16.1711 21.7264 16.498 21.7281H16.5042C16.8256 21.7264 17.1548 21.5995 17.3964 21.36L24.749 14.0886C25.1073 13.7343 25.2244 13.1936 25.0252 12.7206C24.8288 12.2549 24.3607 11.9475 23.854 11.9475H20.3956V1.25595C20.3956 0.570034 19.8192 0 19.1256 0L13.8738 0.000551784ZM15.1438 2.51245H17.8584V13.2013C17.8584 13.8872 18.4348 14.4572 19.1284 14.4572H20.7907L16.5008 18.6997L12.211 14.4572H13.8733C14.5668 14.4572 15.1433 13.8872 15.1433 13.2013L15.1438 2.51245ZM1.26998 17.6589C0.576402 17.6589 0 18.2289 0 18.9149V27.744C0 28.43 0.576402 29 1.26998 29H31.73C32.4236 29 33 28.43 33 27.744V18.9149C33 18.2289 32.4236 17.6589 31.73 17.6589H24.2028C23.5092 17.6589 22.9328 18.2289 22.9328 18.9149C22.9328 19.6008 23.5092 20.1708 24.2028 20.1708H30.4628V26.4881H2.53996V20.1708H8.79725C9.49083 20.1708 10.0672 19.6008 10.0672 18.9149C10.0672 18.2289 9.49083 17.6589 8.79725 17.6589H1.26998Z"
                                fill="#3F77A5"
                              />
                            </svg>
                          </Box>
                          <Text
                            fontSize="16px"
                            fontWeight="700"
                            color="#3F77A5"
                            _hover={{ textDecoration: "underline" }}
                          >
                            Download Job Description
                          </Text>
                        </Flex>
                      </Button>
                    </Box>
                  )}
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
