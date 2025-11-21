import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md"; // Using a standard icon for list items
import { Helmet } from "react-helmet-async";
import PageContentWrapper from "../../../components/PageContentWrapper";

// A helper component to create consistent section spacing
const Section = ({ title, children }) => (
  <VStack spacing={4} align="start" w="100%">
    <Heading
      as="h2"
      fontSize={{ base: "xl", md: "2xl" }}
      fontWeight="600"
      color="gray.800"
    >
      {title}
    </Heading>
    {children}
  </VStack>
);

const TermsAndCondition = () => {
  return (
    <Box>
      <Helmet>
        {/* --- Primary Meta Tags --- */}
        <title>Terms & Conditions | VMukti Solutions</title>
        <meta
          name="description"
          content="Read the official Terms & Conditions of VMukti Solutions. Review policies on service usage, responsibilities, privacy, and compliance for all users and partners."
        />
        <meta name="robots" content="index, follow" /> {/* As requested */}
        <link
          rel="canonical"
          href="https://www.vmukti.com/terms-and-conditions"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vmukti.com/terms-and-conditions"
        />
        <meta property="og:title" content="Terms & Conditions | VMukti Solutions" />
        <meta
          property="og:description"
          content="Read the official Terms & Conditions of VMukti Solutions. Review policies on service usage, responsibilities, privacy, and compliance for all users and partners."
        />
        {/* <meta property="og:image" content={featureImage} /> */}
        {/* --- Twitter Meta Tags --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vmukti" />
        <meta name="twitter:title" content="Terms & Conditions | VMukti Solutions" />
        <meta
          name="twitter:description"
          content="Read the official Terms & Conditions of VMukti Solutions. Review policies on service usage, responsibilities, privacy, and compliance for all users and partners."
        />
        {/* <meta name="twitter:image" content={featureImage} /> */}
      </Helmet>
      <PageContentWrapper>
        <Box
        // #406D92
          bg="linear-gradient(to right,rgba(190, 221, 243, 0.2), rgba(66, 110, 206, 0.1)), url('../assets/termsandcondition.jpg')" 
          backgroundSize="cover"
          backgroundPosition="center"
          py={{ base: 20, md: 28 }}
          px="4"
          color="white"
          borderRadius="24px"
        >
          <Box w="90%" p="4">
            <Heading
              as="h1"
              fontSize={{ base: "32px", md: "64px" }}
              fontWeight="bold"
              textAlign="left"
            >
              Terms and Conditions
            </Heading>
          </Box>
        </Box>
      </PageContentWrapper>

      {/* Content Section */}
      <Container maxW="container.lg" py={{ base: 10, md: 16 }}>
        <VStack spacing={10} align="start" color="gray.600" lineHeight="1.7">
          <Section title="Introduction">
            <Text>
              Welcome to VMukti Solutions Pvt. Ltd. and the website of VMukti
              (the Site). Please read the following Terms of Use carefully
              before using this Site or ordering/downloading any of our
              products, so that you are aware of your legal rights and
              obligations with respect to VMukti Solutions Pvt. Ltd. and its
              affiliates and subsidiaries (individually and collectively,
              VMukti).
            </Text>
            <Text>
              By using the Site, purchasing software or other products, you
              signify your irrevocable acceptance of these Terms of Use. You
              also agree to ensure that anyone who uses this software on your
              computer also abides by the Terms of Use. VMukti has the right to
              revise the Terms of Use at any time without providing notice to
              its users. Your continued use of the Site shall be deemed
              irrevocable acceptance of those revisions.
            </Text>
            <Text>
              We reserve the right to change, modify, suspend or discontinue any
              portion of the Site at any time. We may also impose limits on
              certain features or restrict your access to parts or the entire
              Site without notice or liability.
            </Text>
          </Section>

          <Section title="Privacy">
            <Text>
              Your privacy is very important to us at VMukti. To better protect
              your rights we have provided the VMukti Privacy Policy to explain
              our privacy practices in detail.
            </Text>
          </Section>

          <Section title="Use of VMukti Software">
            <Text>
              VMukti software, sometimes referred to as (the Software) and
              accompanying documentation that are made available by download
              from this Site or on CD-ROM format are the copyrighted work of
              VMukti. Use of the Software is governed by the terms of the end
              user license agreement that accompanies or is included with such
              Software and is also referenced on this website. You will not be
              able to download or install any software that is accompanied by or
              includes an end user license agreement unless you agree to the
              terms of such end user license agreement. If you do not agree to
              such terms, you will not be able to use the Software. You may not
              decompile, reverse engineer or otherwise attempt to discover the
              source code of the Software available on the Site.
            </Text>
            <Text>
              If you have previously installed and accepted the End User License
              Agreement for the Software, VMS, VAS of VMukti, your web browser
              will utilize this component to download the VMukti software,
              provided that this component is running at the time you chose to
              download VMukti. This is done to reduce download time for users
              and reduce the load of our file server.
            </Text>
          </Section>

          <Section title="Warranties and Disclaimers">
            <Text>
              Except as expressly provided otherwise in a written agreement
              between you and VMukti, the materials in or purchased through this
              site are provided as is and without warranties of any kind either
              express or implied. To the fullest extent permissible pursuant to
              applicable law, VMukti disclaims all warranties, express or
              implied, including, but not limited to, implied warranties of
              merchantability or fitness for a particular purpose, or the
              warranty of non-infringement. Without limiting the foregoing,
              VMukti does not warrant that the functions contained in the
              service will be uninterrupted or error-free, that defects will be
              corrected, or that this service or the server that makes it
              available are free of viruses or other harmful components. VMukti
              does not warrant or make any representations regarding the use or
              the results of the use of the materials in this service in terms
              of their correctness, accuracy, reliability, or otherwise. You
              (and not VMukti) assume the entire cost of all necessary
              servicing, repair, or correction. Applicable law may not allow the
              exclusion of implied warranties, so the above exclusion may not
              apply to you. Without limitation of the foregoing, you acknowledge
              that as a service to users of the VMukti service, we include links
              to other web sites on the world wide web portion of the internet
              and that VMukti has no control over, and makes no representations
              of any kind whatsoever, regarding the content or appropriateness
              of content on such web sites and you hereby irrevocably waive any
              claim against us with respect to such web sites.
            </Text>
            <Text>
              Under no circumstances, including, but not limited to, negligence,
              shall VMukti be liable for any special or consequential damages
              that result from the use of, or the inability to use, the
              materials, the site, or any other web site, even if VMukti or a
              VMukti authorized representative has been advised of the
              possibility of such damages. Applicable law may not allow the
              limitation or exclusion of liability for incidental or
              consequential damages, so the above limitation or exclusion may
              not apply to you. No advice or information, whether written or
              oral, obtained by you from VMukti or from or through the site
              shall create any warranty not expressly stated in the terms of
              use. In no event shall VMukti’s total liability to you for all
              damages, losses, and causes of action (whether in contract, tort
              (including, but not limited to, negligence) or otherwise) exceed
              the amount paid by you, if any, for purchasing any materials or
              products.
            </Text>
          </Section>

          <Section title="Terms of Use">
            <Text>
              The license for use of the Site and the Materials is effective
              until terminated. You may terminate it at any time by destroying
              the Materials together with all copies thereof. This license will
              terminate upon conditions set forth elsewhere within this Terms of
              Use or if you fail to comply with any term or condition of this
              Terms of Use. In such event, no notice shall be required by VMukti
              to effect such termination. Upon termination of this Terms of Use,
              you agree to destroy the Materials together with all backup
              copies, modifications, printed or written materials, and merged
              portions in any form, or return same to VMukti at your expense.
            </Text>
          </Section>

          <Section title="Web Site Links">
            <Text>
              VMukti may provide links to other sites that we feel are relevant
              and interesting to our users (Link Sites). VMukti is not
              responsible for the content on the Link Sites and is not
              responsible for the accuracy of the information and intellectual
              property notices therein. Some of these Link Sites may provide you
              with opportunities to purchase products (“Products”). We do not
              endorse any of the Products nor do we make any representations or
              warranties in connection with the Products.
            </Text>
          </Section>

          <Section title="Online Behaviour">
            <Text>
              Please exercise respect when participating in any of VMukti™
              community features such as Forums, Blogs, Email functions, etc.
              and when using chat, voice, video, file transfer or any other
              feature of VMukti Software (User Materials). You may not submit or
              publish through VMukti any User Materials that are libelous,
              defamatory, pornographic, an invasion of privacy, obscene,
              abusive, illegal, racist, offensive, harmful to a minor or an
              infringement on any intellectual property rights of a third party
              or would otherwise violate the rights of any third party.
              Furthermore, you may not submit or publish User Materials through
              VMukti that solicit funds or services, contain advertising or
              include programs that contain viruses or any other programs
              designed to impair the functionality of any computer.
            </Text>
            <Text>
              Please remember that we do not monitor the contents of these
              community features and cannot be held responsible for the User
              Materials. Therefore, we apologize in advance for any offensive or
              otherwise displeasing User Materials.
            </Text>
            <Text>
              Not with standing any rights or obligations governed by the
              Additional Terms, if, at any time you upload or post User
              Materials, including but not limited to comments, suggestions,
              problem reports, bug reports and design ideas to the Site you
              automatically grant VMukti a non-exclusive, royalty-free,
              perpetual license of all rights throughout the universe to use,
              edit, modify, include, incorporate, adapt, record and reproduce
              the User Materials including, without limitation, all trademarks
              associated therewith, in any manner whatsoever, in or
              out-of-context, in all languages, in all media now known and
              hereafter devised, and to use the User Materials in advertising,
              promotion and publicity for the Site, VMukti and its or their
              products and services, in any and all media now known or hereafter
              devised. In addition, you represent and warrant that you are
              entitled to enter into these Terms of Use and that you waive any
              so-called moral rights in and to the User Materials.
            </Text>
          </Section>

          <Section title="Submissions">
            <Text>
              Certain parts of the Site may ask for written suggestions or
              problem reports such as using our contact form or problem report
              form (Submissions). In such a case, please read carefully the
              specific terms, which govern those Submissions (Additional Terms).
              In the absence of Additional Terms, the VMukti Terms of Use shall
              govern your legal rights with respect to those Submissions.
            </Text>
            <Text>
              The Submissions shall be deemed the property of VMukti. VMukti
              shall exclusively own all now known or hereafter existing rights
              to the Submissions throughout the universe in perpetuity and shall
              be entitled to use the Submissions for any purpose whatsoever,
              commercial or otherwise, without compensation to the provider of
              the Submissions. In any event, any Submissions you send to VMukti
              will not be treated as confidential and VMukti shall not be liable
              for any disclosure of the Submissions.
            </Text>
          </Section>

          <Section title="Accounts and Security">
            <Text>
              VMukti does not warrant that the functions contained in the
              service provided by the Site will be uninterrupted or error-free,
              that defects will be corrected or that this service or the server
              that makes it available will be free of viruses or other harmful
              components.
            </Text>
            <Text>
              As part of the registration process, each Patron will select a
              password (Password) and User Name (User Name). You shall provide
              VMukti with accurate, complete, and updated Account information.
              Failure to do so shall constitute a breach of this Terms of Use,
              which may result in immediate termination of your Account. You may
              not (i) select or use a User Name of another person with the
              intent to impersonate that person; (ii) use a name subject to the
              rights of any other person without authorization; or (iii) use a
              User Name that VMukti, in its sole discretion, deems inappropriate
              or offensive.
            </Text>
            <Text>
              You shall notify VMukti of any known or suspected unauthorized
              use(s) of your Account, or any known or suspected breach of
              security, including loss, theft, or unauthorized disclosure of
              your password. You shall be responsible for maintaining the
              confidentiality of your password.
            </Text>
            <Text>
              Any fraudulent, abusive, or otherwise illegal activity may be
              grounds for termination of your Account, at VMukti™ sole
              discretion, and you may be reported to appropriate law-enforcement
              agencies.
            </Text>
          </Section>

          <Section title="Notification of Copyright Infringement">
            <Text>
              VMukti will investigate notices of copyright infringement and take
              appropriate actions. If you believe that your work has been used
              or copied in a way that constitutes copyright infringement and
              such infringement is occurring on this Site or on sites linked to
              from this Site, please notify VMukti.
            </Text>
            <Text>
              Pursuant to law of Govt. of India, a notification of claimed
              infringement must be a written communication addressed to the
              designated agent as set forth below, and must include
              substantially all of the following:
            </Text>
            <List spacing={3} pl={5}>
              <ListItem>
                A physical or electronic signature of the person authorized to
                act on behalf of the owner of the copyright interest that is
                alleged to have been infringed.
              </ListItem>
              <ListItem>
                A description of the copyrighted work or works that you claim
                have been infringed (infringed work) and identification of what
                material in such work(s) is claimed to be infringing (infringing
                work) and which you request to be removed or access to which is
                to be disabled.
              </ListItem>
              <ListItem>
                A description of where the material that you claim is infringing
                is located on the Site.
              </ListItem>
              <ListItem>
                Information sufficient to permit VMukti to contact you, such as
                your physical address, telephone number, and email address.
              </ListItem>
              <ListItem>
                A statement by you that you have a good faith belief that the
                use of the material identified in your Notice in the manner
                complained of is not authorized by the copyright owner, its
                agent, or the law.
              </ListItem>
              <ListItem>
                A statement by you that the information in your Notice is
                accurate and, under penalty of perjury that you are the
                copyright owner or authorized to act on the copyright owner™
                behalf.
              </ListItem>
            </List>
            <Text>
              For Notice of claims of copyright infringement, VMukti can be
              reached by our.
            </Text>
          </Section>

          <Section title="Administrative Information">
            <VStack spacing={6} align="start" w="100%">
              <Box>
                <Heading as="h3" fontSize="lg" fontWeight="600" mb={2}>
                  Jurisdictional Issues
                </Heading>
                <Text>
                  You agree to indemnify and hold VMukti, and its subsidiaries,
                  affiliates, officers, agents, co-branders or other partners,
                  and employees, harmless from any claim or demand, including
                  reasonable attorneys’ fees, made by any third party due to or
                  arising out of content you submit, post to or transmit through
                  the Site, your use of the Site, your connection to the Site,
                  your violation of the Terms of Use, or your violation of any
                  rights of another person or entity.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" fontSize="lg" fontWeight="600" mb={2}>
                  Indemnity
                </Heading>
                <Text>
                  You agree to indemnify and hold VMukti, and its subsidiaries,
                  affiliates, officers, agents, co-branders or other partners,
                  and employees, harmless from any claim or demand, including
                  reasonable attorneys’ fees, made by any third party due to or
                  arising out of content you submit, post to or transmit through
                  the Site, your use of the Site, your connection to the Site,
                  your violation of the Terms of Use, or your violation of any
                  rights of another person or entity.
                </Text>
              </Box>
              <Box>
                <Heading as="h3" fontSize="lg" fontWeight="600" mb={2}>
                  Governing Law
                </Heading>
                <Text>
                  By accessing this Site, you and VMukti agree that all matters
                  relating to your access to, or use of, this Site shall be
                  governed by and construed in accordance with the laws of
                  Luxembourg, without giving effect to any principles of
                  conflicts of law.
                </Text>
              </Box>
            </VStack>
          </Section>

          <Section title="Trademarks">
            <Text>
              VMukti, VMuktiIn, VMuktiOut, VMukti Me, the VMukti Logo and the S
              logo and other marks indicated on our site are trademarks of
              VMukti Limited or other related companies. VMukti is registered in
              the India Patent and Trademark Office, and with the Trademark
              Offices of the countries of Australia, Finland, Hong Kong, Israel,
              Japan, Liechtenstein, New Zealand, Switzerland, and Taiwan.
            </Text>
            <Text>
              Registrations have been filed in several other countries. VMukti™
              trademarks and trade address may not be used in connection with
              any product or service that is not VMukti™s, in any manner that is
              likely to cause confusion among customers, or in any manner that
              disparages or discredits VMukti. All other trademarks not owned by
              VMukti or any of its related companies that appear on this site
              are the property of their respective owners, who may or may not be
              affiliated with, connected to, or sponsored by VMukti.
            </Text>
          </Section>

          <Section title="Copyright">
            <Text>
              All content and compilation of content included on VMukti’s
              website, such as text, graphics, logos, button icons, images,
              audio clips, digital downloads and software, is the property of
              VMukti Limited and is protected by India and international
              copyright laws.
            </Text>
            <Text>
              If you have any questions or concerns about this Terms of Use or
              any issues raised in this Terms of Use or on the Site, please
              contact us at: info@vmukti.com
            </Text>
          </Section>
        </VStack>
      </Container>
    </Box>
  );
};

export default TermsAndCondition;
