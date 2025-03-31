import PageContentWrapper from "../../components/PageContentWrapper";
import TripleImageSection from "../../components/TripleImageSection";
import AdvancedSurveillance from "../Home/AdvancedSurveillance";


const OurServings = () => {
    const heading = [
        { text: "Customizable", color: "#3F77A5" },//blue
        { text: "AI solutions tailored\nfor", color: "#000" },//use \n to make a new line
        { text: "every need", color: "#DB7B3A" },//orange
    ];
    const description = "Unlock smarter security with AI-driven surveillance solutions for real-time monitoring, proactive threat detection, and seamless video management. Enhance safety and efficiency with scalable, future-ready technology."
    const images = ["https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-11.webp",
        "https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-11.webp",
        "https://cdn-front.freepik.com/images/ai/image-generator/gallery/resource-tti-11.webp"]
    return <>

        <PageContentWrapper>
            <TripleImageSection mt heading={heading} description={description} images={images} />
            <AdvancedSurveillance />
        </PageContentWrapper></>
}


export default OurServings;