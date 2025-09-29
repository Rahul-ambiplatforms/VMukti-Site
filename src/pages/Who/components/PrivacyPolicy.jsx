import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async"; // For SEO Meta Tags
import PageContentWrapper from "../../../components/PageContentWrapper";

// A reusable component to structure each section of the policy
const PolicySection = ({ title, children, ...props }) => (
  <VStack spacing={4} align="stretch" as="section" {...props}>
    <Heading as="h2" size="lg" textTransform="uppercase">
      {title}
    </Heading>
    {children}
  </VStack>
);

// Hero Section Component for the top banner
const HeroSection = () => {
  return (
    <Box
      as="section"
      w="full"
      h={{ base: "200px", md: "300px" }}
      bgImage="url('/assets/privacypolicy.jpg')"
      bgColor="#0B1D33"
      bgSize="cover"
      bgPosition="center"
      position="relative"
      borderRadius="24px"
    >
      <Container
        maxW="container.xl"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        position="relative"
        px={{ base: 4, md: 8 }}
      >
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: "32px", md: "48px", lg: "64px" }}
          fontWeight="bold"
        >
          Privacy Policy
        </Heading>
      </Container>
    </Box>
  );
};

// Main Privacy Policy Component
const PrivacyPolicy = () => {
  const emailLink = (
    <Link href="mailto:contact@vmukti.com" color="blue.500" isExternal>
      contact@vmukti.com
    </Link>
  );
  const infoEmailLink = (
    <Link href="mailto:info@vmukti.com" color="blue.500" isExternal>
      info@vmukti.com
    </Link>
  );

  return (
    <>
      {/* --- SEO AND METADATA --- */}
      <Helmet>
        <title>Privacy Policy - Vmukti</title>
        <meta
          name="description"
          content="Read the Vmukti Solutions Privacy Policy to understand how we collect, use, and protect your personal information on our platform."
        />
        <link rel="canonical" href="https://www.vmukti.com/privacy-policy/" />
      </Helmet>

      <Box>
        <PageContentWrapper>
          <HeroSection />
        </PageContentWrapper>

        <Container
          maxW="container.lg"
          py={{ base: 10, md: 20 }}
          px={{ base: 4, md: 6 }}
        >
          <VStack spacing={{ base: 8, md: 10 }} align="stretch">
            {/* Introduction Section */}
            <VStack spacing={4} align="stretch" as="section">
              <Text>
                <strong>LAST UPDATED:</strong> September 15th 2022
              </Text>
              <Text>
                VMukti Solutions Pvt. Ltd. has drafted this Privacy Policy to
                ensure that you can clearly understand our personal information
                practices as you use VMukti Platform (the “Sites”). This Privacy
                Policy describes the types of information we collect, how we use
                the information, with whom we share it, and the choices you can
                make about our collection, use, and disclosure of your
                information. We also describe in this Privacy Policy the
                measures we take to protect the security of your Personal
                Information and how you can contact us about our privacy
                practices.
              </Text>
              <Text>
                This Privacy Policy incorporates by reference the Terms of Use
                for the Sites, which apply to this Privacy Policy. When you
                visit the Sites or provide us with information, you consent to
                our use and disclosure of the information we collect or receive
                as described in this Privacy Policy and you agree to be bound by
                the terms and conditions of the policy.
              </Text>
              <Text>
                Please review this Privacy Policy periodically as we may update
                it from time to time to reflect changes in our data practices.
              </Text>
            </VStack>

            <PolicySection title="The Information We Collect">
              <Text>
                We may obtain information about you from various sources,
                including our Sites, when you call or email us or communicate
                with us through social media, or when you participate in an
                Event. An “Event” is an online gathering that includes
                registration before the event begins, activities between the
                event’s start and end time, and after the event’s end time. We
                also may obtain information about you from business partners and
                other third parties and publicly available information,
                including from our customers prior to or during an event. We may
                collect your information at different points in connection with
                our business and the Sites, including your registration, profile
                submissions, use of the Sites, interactions with us, and during
                an Event.
              </Text>
              <Heading as="h3" size="md" pt={2}>
                The types of information we may obtain include:
              </Heading>
              <VStack align="stretch" pl={4} spacing={3}>
                <Text>
                  <strong>A. Personal Information,</strong> which is information
                  that identifies you, such as your name, password, email
                  address, address, phone number(s), and photographic image. In
                  some locations, Personal Information may have a broader
                  definition under an applicable law, and in these jurisdictions
                  your rights with respect to Personal Information will be
                  governed by the broader definition.
                </Text>
                <Text>
                  <strong>B. Demographic Information,</strong> such as zip code,
                  country, years of work experience, skills, industry,
                  certifications, degrees, etc. We do this to help you connect
                  with other event participants like exhibitors.
                </Text>
                <Text>
                  <strong>C. Preference Information,</strong> such as preferred
                  time zone or whether to show a dialog on your next visit. We
                  do this to personalize your experience on the Sites.
                </Text>
                <Text>
                  <strong>D. Content Submissions,</strong> such as any
                  information that you submit on our forms, blogs, social media
                  pages, through file uploads, or via online chats as part of an
                  Event.
                </Text>
                <Text>
                  <strong>E. Anonymous information,</strong> such as pages
                  visited, and time on the Sites. We do this in order to
                  understand how the Sites are being used and what the
                  engagement is like.
                </Text>
              </VStack>
              <Text>
                We collect information stored in your social media profile that
                you authorize us to access when you use your social media
                profile to execute features on the Sites, such as the ability to
                log into the Sites using your social media profile credentials.
              </Text>
              <Text>
                In addition, when you visit our Sites, we may collect certain
                information by automated means, such as cookies and web beacons,
                as described in more detail below. The information we may
                collect by automated means includes, but is not limited to:
              </Text>
              <VStack align="stretch" pl={4} spacing={3}>
                <Text>
                  <strong>
                    A. Information about the devices our visitors use to access
                    the Internet
                  </strong>{" "}
                  (such as the IP address and the device, browser and operating
                  system type).
                </Text>
                <Text>
                  <strong>
                    B. Pages and URLs that refer visitors to our Sites,
                  </strong>{" "}
                  also pages and URLs that visitors exit to once they leave our
                  Sites.
                </Text>
                <Text>
                  <strong>C. Dates and times of visits to our Sites.</strong>
                </Text>
                <Text>
                  <strong>D. Information on actions taken on our Sites</strong>{" "}
                  (such as page views, site navigation patterns or application
                  activity).
                </Text>
                <Text>
                  <strong>E. A general geographic location</strong> (such as
                  country and city) from which a visitor accesses our Sites.
                </Text>
                <Text>
                  <strong>
                    F. Search terms that visitors use to reach our Sites.
                  </strong>
                </Text>
              </VStack>
            </PolicySection>

            <PolicySection title="How We Use The Information We Collect">
              <Text>We may use the information we obtain about you to:</Text>
              <List styleType="decimal" spacing={3} pl={5}>
                <ListItem>
                  Create, manage and maintain your account on the Sites.
                </ListItem>
                <ListItem>
                  Provide you with the Sites and other services that you
                  request.
                </ListItem>
                <ListItem>
                  Manage your participation in events hosted on the Sites, where
                  you have signed up for such events and promotions.
                </ListItem>
                <ListItem>
                  Maintain a record of the events in which you participate,
                  including chat and webinar history and download activity.
                </ListItem>
                <ListItem>
                  Enable you to interact with other event participants.
                </ListItem>
                <ListItem>
                  Provide administrative notices or communications applicable to
                  your use of the Sites.
                </ListItem>
                <ListItem>
                  Respond to your questions and comments and provide customer
                  support.
                </ListItem>
                <ListItem>
                  Operate, evaluate and improve our business and the products
                  and services we offer.
                </ListItem>
                <ListItem>
                  Analyze and enhance our marketing communications and
                  strategies (including by identifying when emails we have sent
                  to you have been received and read).
                </ListItem>
                <ListItem>
                  Analyze trends and statistics regarding visitors’ use of our
                  Sites, mobile applications and social media assets, and the
                  jobs viewed or applied to on our Sites.
                </ListItem>
                <ListItem>
                  Maintain the quality of the Sites, including detecting
                  security incidents and protecting against malicious,
                  deceptive, illegal or fraudulent activities.
                </ListItem>
                <ListItem>
                  Notify you from time to time about relevant products and
                  services operated by VMukti Solutions
                </ListItem>
                <ListItem>
                  Enforce our Sites’ Terms of Use and legal rights.
                </ListItem>
                <ListItem>
                  Comply with applicable legal requirements and industry
                  standards and our policies.
                </ListItem>
              </List>
              <Text>
                We also use non-personally identifiable information and certain
                technical information about your computer and your access to the
                Sites (including your internet protocol address) in order to
                operate, maintain and manage the Sites. We collect this
                information by automated means, such as cookies and web beacons,
                as described in more detail below.
              </Text>
              <Text>
                We may collect, compile, store, publish, promote, report, share
                or otherwise disclose or use any and all Aggregated Information,
                however, unless otherwise disclosed in this policy, we will not
                sell or otherwise transfer or disclose your Personal Information
                to a third party without your consent.
              </Text>
              <Text>
                If we seek to use the information we obtain about you in other
                ways, we will provide specific notice and request your consent
                at the time of collection.
              </Text>
            </PolicySection>

            <PolicySection title="The Information We Share">
              <Text>
                When you create an account on the Sites, VMukti Solutions will
                collect and retain information about you, some of which is
                Personal Information. You may be required to provide additional
                personal or demographic information when registering for an
                Event hosted on the Sites including, but not limited to, photo,
                resume, work experience, educational qualification, location,
                skills, industry.
              </Text>
              <Text>
                The information you provide is collected by VMukti Solutions and
                is shared with the company(ies) participating in the Event,
                which may be a customer or a Third Party. This includes personal
                information such as name, email address, resume and other
                questions you answer during the registration process. This also
                includes the conversation (chat) history from conversations with
                any other participant and/or organization. If providing
                information for an Event, this information may become subject to
                the policies of the respective company(ies) after it has been
                shared, as VMukti Solutions is not responsible for these
                policies. Providing additional information beyond what is
                required at registration is entirely optional but enables you to
                better identify yourself.
              </Text>
              <Text>
                We may share your Personal Information with third party
                contractors or service providers to provide you with the
                services that we offer you through our Sites; to provide
                technical support, or to provide specific services in accordance
                with your instructions. These third parties are required not to
                use your Personal Information other than to provide the services
                requested by VMukti Solutions.
              </Text>
              <Text>
                We may also disclose specific user information when we
                determine, in good faith, that such disclosure is necessary to
                comply with the law, to cooperate with or seek assistance from
                law enforcement, to prevent a crime or protect national
                security, or to protect the interests or safety of VMukti
                Solutions, our customers, or other users of the Sites.
              </Text>
              <Text>
                You should be aware that any Personal Information you submit on
                the Sites may be read, collected, or used by other users of
                VMukti Solutions, and could be used to send you unsolicited
                messages. In addition, any personal information you submit in an
                Event can be read, collected, or used by participating
                companies, and could be used to send you unsolicited messages.
                We are not responsible for the Personal Information you choose
                to submit to the Sites.
              </Text>
            </PolicySection>

            <PolicySection title="How We Protect Personal Information">
              <Text>
                VMukti Solutions maintains administrative, technical, and
                physical safeguards designed to assist us in protecting the
                Personal Information we collect against accidental, unlawful or
                unauthorized destruction, loss, alteration, access, disclosure
                or use.
              </Text>
              <Text>
                Please note that no electronic transmission of information can
                be entirely secure. We cannot guarantee that the security
                measures we have in place to safeguard Personal Information will
                never be defeated or fail, or that those measures will always be
                sufficient or effective. Therefore, although we are committed to
                protecting your privacy, we do not promise, and you should not
                expect, that your Personal Information will always remain
                private. As a user of the Sites, you understand and agree that
                you assume all responsibility and risk for your use of the
                Sites, the internet generally, and the documents you post or
                access and for your conduct on and off the Sites. To further
                protect yourself, you should safeguard your VMukti Solutions
                Sites username and password and not share that information with
                anyone. You should also log off from and close your browser
                window when you have finished your visit to our Sites. Please
                note that we will never ask for your VMukti Solutions account
                password via email.
              </Text>
              <Text>
                VMukti Solutions does not safeguard your Personal Information
                from our customers when they are acting as the controller of
                your Personal Information, including when held by our customers
                outside of the Sites. They are responsible for handling Personal
                Information in accordance with their privacy policies.
              </Text>
            </PolicySection>

            <PolicySection title="How to Update Your Personal Information">
              <Text>
                You may access, update and amend Personal Information included
                in your online account at any time by logging into your account
                and making the necessary changes.
              </Text>
              <Text>
                You may choose to deactivate your account at any time by
                emailing us at {emailLink}. When we deactivate your account, you
                will be logged out of VMukti websites and you will no longer be
                able to log into VMukti websites to view the events you attended
                or the chats you had with other participants. Certain
                information in connection with your account may be retained
                after deactivation by VMukti Solutions or by the participants
                who it has already been shared with pursuant to this privacy
                policy.
              </Text>
            </PolicySection>

            <PolicySection title="About Cookies, Tracking Choices, and Third-Party Service Providers">
              <Text>
                A “cookie” is a text file that websites send to a visitor’s
                computer or other Internet-connected devices to uniquely
                identify the visitor’s browser or to store information or
                settings in the browser. A “web beacon” is also called a Web bug
                or a pixel tag or a clear GIF. Used in combination with cookies,
                a web beacon is an often-transparent graphic image, usually no
                larger than 1-pixel x 1-pixel, that is placed on a Web site or
                in an e-mail that is used to monitor the behavior of the user
                visiting the Website or sending the e-mail.
              </Text>
              <Text>
                VMukti Solutions uses cookies and other similar technologies for
                the convenience of our users. Cookies enable us to serve secure
                pages to our users without asking them to sign in repeatedly.
                VMukti also uses cookies to store non-personally identifying
                information such as your preferences. VMukti also uses cookies
                to ensure the proper functioning and efficiency of our Sites.
              </Text>
              <Text>
                Most Internet browsers enable you to erase cookies from your
                computer hard drive, block all cookies, or receive a warning
                before a cookie is stored. Please be aware, that our Sites
                cannot be used without cookies enabled. Our Sites also do not
                respond to web browser “do not track” requests.
              </Text>
              <Text>
                VMukti Solutions permits third-party cookies on its Sites. For
                example, third-party services located on the Sites, including
                those that allow for single sign-on, commenting, live chat and
                social media sharing, may use cookies to remember user
                preference settings and interaction history.
              </Text>
              <Text>
                The third-party vendors, including Google, whose services we use
                – will place cookies on web browsers in order to serve ads based
                on past visits to our website. – Third-party vendors, including
                Google, use cookies to serve ads based on a user’s prior visits
                to your website. This allows us to make special offers and
                continue to market our services to those who have shown interest
                in our service.
              </Text>
              <Text>
                The companies that provide third-party tools and services such
                as commenting operate under their own privacy policies and
                VMukti Solutions encourages you to be aware of the privacy
                policies of such companies. VMukti Solutions does not have
                control over or access to any information contained in the
                cookies that are set on your computer by third-party tool
                providers.
              </Text>
              <Text>
                There are many resources on the Internet that can provide you
                guidance regarding deleting or disabling cookies.
              </Text>
            </PolicySection>

            <PolicySection title="Links to Other Sites">
              <Text>
                Content on our Sites may contain links to other sites that are
                not owned or controlled by VMukti Solutions. Please be aware
                that we are not responsible for the privacy practices of such
                other sites. We encourage you to be aware when you leave our
                Sites and to read the privacy statements of each and every
                website that collects Personal Information. This Privacy Policy
                applies only to information collected on VMukti Solutions.
              </Text>
            </PolicySection>

            <PolicySection title="Disputes">
              <Text>
                If you believe that we have not adhered to the Privacy Policy,
                please contact us by e-mail at {emailLink}. We will do our best
                to address your concerns. If you feel that your complaint has
                been addressed incompletely, we invite you to let us know for
                further investigation.
              </Text>
            </PolicySection>

            <PolicySection title="Children's Privacy">
              <Text>
                Children under the age of 13 (or other age as required by local
                law) are permitted to use the site ONLY as part of an approved
                agreement with a customer providing for children’s data.
                Children under 13 years old (or other age as required by local
                law) are otherwise prohibited from using the site. If you are a
                parent or guardian and you are aware that your child has
                provided us with personal data that is not part of an approved
                customer relationship, please contact us immediately. If we
                learn that we have collected any personal data in violation of
                applicable law, we will promptly take steps to delete such
                information and terminate the child’s account.
              </Text>
              <Text>
                For such customer accounts, VMukti Solutions involves the
                collection and maintenance of personal data about children under
                13, as well as other personal data of students as applicable,
                through the site. It is operated by: VMukti Solutions Pvt. Ltd.
                3, 4, Shivalik Plaza, Nr. Sahajanand College, IIM Road,
                Ambawadi, Ahmedabad-380015. Please contact VMukti Solutions at{" "}
                {emailLink} with any questions about the collection, use and
                sharing of children’s personal data.
              </Text>
              <Text>
                The information collected about children under 13, as well as
                other personal data of students, includes: name and email
                address.
              </Text>
              <Text>
                The information about children under 13, as well as other
                personal data of students, is or may be used for: account
                creation, user verification, deliver the products and services,
                share content between users, user interaction, customer support,
                user communication, prevent fraud, detect security incidents,
                analytics, respond to legal inquiries or terminate accounts.
              </Text>
              <Text>
                The information about children under 13, as well as other
                personal data of students, is disclosed to: service providers
                and vendors (including for the purposes as agreed per T&C, other
                authorized users with whom the child or student shares and/or
                communicates, government and/or legal requestors as required by
                law, and others as necessary (based on the appropriate consent
                of the school and/or parent / legal guardian).
              </Text>
              <Text>
                No child or student personal data is made available to the
                public by VMukti Solutions. Children may make their personal
                data available to other authorized users as part of the
                services.
              </Text>
              <Text>
                The parent of a child under 13 or a student (subject to an
                applicable law) can review or have deleted the personal data
                held by VMukti Solutions and refuse to permit its further
                collection or use. A parent may do so by notifying the customer
                (e.g., school) through their designated contact mechanism and/or
                notifying VMukti Solutions via {emailLink}.
              </Text>
            </PolicySection>

            <PolicySection title="Your Privacy Rights">
              <Text>
                Depending on your location, you may have the right to exercise
                certain privacy rights under applicable laws, including the
                right of erasure, the right to object to processing, the right
                to restrict processing, and the right to access / data
                portability. To exercise any of the above rights, please contact
                us at the email address listed below. In order to comply with
                your request, we may have to verify your identity. If we are
                processing your Personal Information on behalf of our customer,
                we will direct you to instead make your request to our customer,
                or may, in some instances, contact the customer directly on your
                behalf.
              </Text>
              <Text>
                You may also have the right to make a complaint to the relevant
                authorities in your jurisdiction. If you need further assistance
                regarding your rights, please contact us at the email address
                listed below and we will consider your request in accordance
                with applicable law.
              </Text>
            </PolicySection>

            <PolicySection title="General Data Protection Regulation (GDPR)">
              <Text>
                VMukti Solutions will comply with all applicable data protection
                and privacy laws & regulations in the performance of its
                obligations under the General Data Protection Regulation
                (“GDPR”, from the GDPR implementation date) or, until GDPR
                implementation date, the Data Protection Act 1998 (“Data
                Protection Laws”).
              </Text>
            </PolicySection>

            <PolicySection title="Privacy Policy Updates">
              <Text>
                If we decide to make material changes to our Privacy Policy, we
                will notify you by prominently posting notice of the changes on
                the Site and updating the date at the top of the Privacy Policy.
                Therefore, we encourage you to check the date of our Privacy
                Policy whenever you visit the website for any updates or
                changes.
              </Text>
              <Text>
                We understand that changes to this Privacy Policy may affect
                your decision to use our Sites. You have the option to
                deactivate your account for any reason. Continued use of our
                Sites and their services following notice of such changes shall
                indicate your acknowledgment of such changes and agreement to be
                bound by the terms and conditions of such changes.
              </Text>
            </PolicySection>

            <PolicySection title="How to Contact Us">
              <Text>
                If you have any questions or comments about this Privacy Policy
                or our use of your personal information, or to exercise your
                rights, please contact us at {infoEmailLink}.
              </Text>
            </PolicySection>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
