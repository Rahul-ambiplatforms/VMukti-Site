const faqsData = {
  // Key for the manufacturing page
  manufacturing: {
    title: "FAQs for Manufacturing", // The new title
    qa: [ // The original array is now under the 'qa' key
      {
        question: "Do you provide APIs for custom integrations?",
        answer: "Yes, our platform offers a comprehensive set of APIs for seamless integration with your existing systems. We support various industry standards and can provide tailored solutions to meet your unique operational requirements.",
      },
      {
        question: "How well do our AI Solutions integrate with third-party security systems?",
        answer: "Our flexible Vision AI platform is designed for easy integration with third-party VMS (Video Management Systems), access control, and incident management systems. This makes us a perfect fit for existing infrastructure upgrades and scalable deployments across various security environments.",
      },
      // ... other manufacturing questions
    ],
  },

  // Key for the homepage
  homepage: {
    title: "Frequently Asked Questions", // Title for this section
    qa: [
      {
        question: "What is VMukti Solutions?",
        answer: "VMukti Solutions is a leading provider of AI-powered visual intelligence and surveillance solutions for various industries, including manufacturing, retail, smart cities, and more. We specialize in computer vision and advanced analytics.",
      },
      {
        question: "How can AI enhance my business operations?",
        answer: "AI can revolutionize operations by automating tasks, providing real-time insights, improving decision-making, enhancing security, and optimizing resource management, leading to significant cost savings and efficiency gains.",
      },
    ],
  },
  
  // Example for a Sub Solution Page 
  'videomanagementsystem': { // The key MUST match the URL slug
    title: "Questions about our VMS",
    qa: [
      {
        question: "Does the VMS support cloud and on-premise storage?",
        answer: "Absolutely. Our VMS is designed with flexibility in mind, offering seamless support for both secure cloud storage options and on-premise servers to meet your specific security and IT policies."
      },
      {
        question: "How many cameras can the VMS handle?",
        answer: "Our Video Management System is built for scalability, capable of handling everything from a handful of cameras in a single location to thousands distributed across a global enterprise."
      }
    ]
  }
};

export default faqsData;