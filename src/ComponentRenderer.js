import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "./helpers/AnimationRevealPage.js"

import EventLandingPage from "../src/demos/EventLandingPage.js";
import HotelTravelLandingPage from "../src/demos/HotelTravelLandingPage.js";
import AgencyLandingPage from "../src/demos/AgencyLandingPage.js";
import SaaSProductLandingPage from "../src/demos/SaaSProductLandingPage.js";
import RestaurantLandingPage from "../src/demos/RestaurantLandingPage.js";
import ServiceLandingPage from "../src/demos/ServiceLandingPage.js";
import HostingCloudLandingPage from "../src/demos/HostingCloudLandingPage.js";

import EventLandingPageImageSrc from "../src/images/demo/EventLandingPage.jpeg";
import HotelTravelLandingPageImageSrc from "../src/images/demo/HotelTravelLandingPage.jpeg";
import AgencyLandingPageImageSrc from "../src/images/demo/AgencyLandingPage.jpeg";
import SaaSProductLandingPageImageSrc from "../src/images/demo/SaaSProductLandingPage.jpeg";
import RestaurantLandingPageImageSrc from "../src/images/demo/RestaurantLandingPage.jpeg";
import ServiceLandingPageImageSrc from "../src/images/demo/ServiceLandingPage.jpeg";
import HostingCloudLandingPageImageSrc from "../src/images/demo/HostingCloudLandingPage.jpeg";


import LoginPage from "../src/pages/Login.js";
import SignupPage from "../src/pages/Signup.js";
import PricingPage from "../src/pages/Pricing.js";
import AboutUsPage from "../src/pages/AboutUs.js";
import ContactUsPage from "../src/pages/ContactUs.js";
import BlogIndexPage from "../src/pages/BlogIndex.js";
import TermsOfServicePage from "../src/pages/TermsOfService.js";
import PrivacyPolicyPage from "../src/pages/PrivacyPolicy.js";

import LoginPageImageSrc from "../src/images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "../src/images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "../src/images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "../src/images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "../src/images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "../src/images/demo/BlogIndexPage.jpeg";
import TermsOfServicePageImageSrc from "../src/images/demo/TermsOfServicePage.jpeg";
import PrivacyPolicyPageImageSrc from "../src/images/demo/PrivacyPolicyPage.jpeg";

import BackgroundAsImageHero from "../src/components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "../src/components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "../src/components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "../src/components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "../src/components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "../src/components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "../src/components/hero/TwoColumnWithPrimaryBackground.js";

import TwoPlansWithDurationSwitcherPricing from "../src/components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "../src/components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "../src/components/pricing/ThreePlans.js";

import ThreeColWithSideImageFeatures from "../src/components/features/ThreeColWithSideImage.js";
import TwoColWithButtonFeatures from "../src/components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "../src/components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "../src/components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "../src/components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "../src/components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "../src/components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "../src/components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "../src/components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "../src/components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "../src/components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "../src/components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "../src/components/cards/ThreeColSlider.js";
import TrendingCards from "../src/components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "../src/components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "../src/components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "../src/components/cards/ProfileThreeColGrid.js"
import ThreeColContactDetailsCards from "../src/components/cards/ThreeColContactDetails.js"

import ThreeColSimpleWithImageBlog from "../src/components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "../src/components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "../src/components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "../src/components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "../src/components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "../src/components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "../src/components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "../src/components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "../src/components/testimonials/SimplePrimaryBackground.js";

import SimpleWithSideImageFAQS from "../src/components/faqs/SimpleWithSideImage.js";
import SingleColFAQS from "../src/components/faqs/SingleCol.js";
import TwoColumnPrimaryBackgroundFAQS from "../src/components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "../src/components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "../src/components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "../src/components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "../src/components/forms/TwoColContactUsWithIllustrationFullForm.js";

import GetStartedCTA from "../src/components/cta/GetStarted.js";
import GetStartedLightCTA from "../src/components/cta/GetStartedLight.js";
import DownloadAppCTA from "../src/components/cta/DownloadApp.js";

import SimpleFiveColumnFooter from "../src/components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "../src/components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "../src/components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "../src/components/footers/FiveColumnDark.js";
import MiniCenteredFooter from "../src/components/footers/MiniCenteredFooter.js";


export const components = {
  landingPages: {
    RestaurantLandingPage: {
      component: RestaurantLandingPage,
      imageSrc: RestaurantLandingPageImageSrc,
      url: "/components/landingPages/RestaurantLandingPage",
    },
    HotelTravelLandingPage: {
      component: HotelTravelLandingPage,
      imageSrc: HotelTravelLandingPageImageSrc,
      url: "/components/landingPages/HotelTravelLandingPage",
    },
    SaaSProductLandingPage: {
      component: SaaSProductLandingPage,
      imageSrc: SaaSProductLandingPageImageSrc,
      url: "/components/landingPages/SaaSProductLandingPage",
    },
    ServiceLandingPage: {
      component: ServiceLandingPage,
      imageSrc: ServiceLandingPageImageSrc,
      url: "/components/landingPages/ServiceLandingPage",
    },
    EventLandingPage: {
      component: EventLandingPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/EventLandingPage",
    },
    AgencyLandingPage: {
      component: AgencyLandingPage,
      imageSrc: AgencyLandingPageImageSrc,
      url: "/components/landingPages/AgencyLandingPage",
    },
    HostingCloudLandingPage: {
      component: HostingCloudLandingPage,
      imageSrc: HostingCloudLandingPageImageSrc,
      url: "/components/landingPages/HostingCloudLandingPage",
    },
  },

  innerPages: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/components/innerPages/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/components/innerPages/SignupPage`,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
    },
    PricingPage: {
      component: PricingPage,
      url: `/components/innerPages/PricingPage`,
      imageSrc: PricingPageImageSrc,
    },
    AboutUsPage: {
      component: AboutUsPage,
      url: `/components/innerPages/AboutUsPage`,
      imageSrc: AboutUsPageImageSrc,
    },
    ContactUsPage: {
      component: ContactUsPage,
      url: `/components/innerPages/ContactUsPage`,
      imageSrc: ContactUsPageImageSrc,
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: `/components/innerPages/BlogIndexPage`,
      imageSrc: BlogIndexPageImageSrc,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/components/innerPages/TermsOfServicePage`,
      imageSrc: TermsOfServicePageImageSrc,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/components/innerPages/PrivacyPolicyPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    }
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/components/blocks/Hero/IllustrationAndInput",
        },
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/components/blocks/Hero/IllustrationAndVideo",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },
    Pricing: {
      type: "Pricing Section",
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: "Two Plans With Duration Switcher",
          component: TwoPlansWithDurationSwitcherPricing,
          url: "/components/blocks/Pricing/TwoPlansWithDurationSwitcher",
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
        ThreePlans: {
          name: "Simple Three Plans",
          component: ThreePlansPricing,
          url: "/components/blocks/Pricing/ThreePlans",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Three Column With Side Image",
          component: ThreeColWithSideImageFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImage",
        },
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/components/blocks/Features/ThreeColSimple",
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: "Three Column With Side Image With Primary Background",
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
        },
        TwoColHorizontalWithButton: {
          name: "Two Column With Button and Horizonatal Features with Icon",
          component: TwoColHorizontalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColHorizontalWithButton",
        },
        TwoColVerticalWithButton: {
          name: "Two Column With Vertical Features and Button",
          component: TwoColVerticalWithButtonFeatures,
          url: "/components/blocks/Features/TwoColVerticalWithButton",
        },
        WithStepsAndImage: {
          name: "Steps with Image",
          component: WithStepsAndImageFeatures,
          url: "/components/blocks/Features/WithStepsAndImage",
        },
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/components/blocks/Features/ThreeColumnDashedBorder",
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: "Three Column With Centered Stats on Primary Background",
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: "/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
        },
        WithStatsAndImage: {
          name: "Stats With Image",
          component: WithStatsAndImageFeatures,
          url: "/components/blocks/Features/WithStatsAndImage",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/components/blocks/Features/WithStatsAndImage2",
        },
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/components/blocks/Cards/Slider",
        },
        Portfolio: {
          name: "Two Column Portfolio Cards With Images ",
          component: PortfolioCards,
          url: "/components/blocks/Cards/Portfolio",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/components/blocks/Cards/TabGrid",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/components/blocks/Cards/ThreeColContactDetails",
        },
        Trending: {
          name: "Two Trending Preview Cards With Images",
          component: TrendingCards,
          url: "/components/blocks/Cards/Trending",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        GridWithFeaturedPost: {
          name: "Grid With Featured Post",
          component: GridWithFeaturedPostBlog,
          url: "/components/blocks/Blog/GridWithFeaturedPost",
        },
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/components/blocks/Blog/PopularAndRecentPosts",
        },
        ThreeColSimpleWithImage: {
          name: "Simple Three Column With Image",
          component: ThreeColSimpleWithImageBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImage",
        },
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      } 
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImage",
        },
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
        TwoColumnWithImageAndRating: {
          name: "Two Column With Image And Rating",
          component: TwoColumnWithImageAndRatingTestimonial,
          url: "/components/blocks/Testimonial/TwoColumnWithImageAndRating",
        },
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/components/blocks/Testimonial/ThreeColumnWithProfileImage",
        },
        SimplePrimaryBackground: {
          name: "Simple With Primary Background",
          component: SimplePrimaryBackgroundTestimonial,
          url: "/components/blocks/Testimonial/SimplePrimaryBackground",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/components/blocks/FAQS/SimpleWithSideImage",
        },
        SingleCol: {
          name: "Single Column",
          component: SingleColFAQS,
          url: "/components/blocks/FAQS/SingleCol",
        },
        TwoColumnPrimaryBackground: {
          name: "Two Column With Primary Background",
          component: TwoColumnPrimaryBackgroundFAQS,
          url: "/components/blocks/FAQS/TwoColumnPrimaryBackground",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/components/blocks/Form/SimpleContactUs",
        },
        SimpleSubscribeNewsletter: {
          name: "Simple Subscribe newsletter",
          component: SimpleSubscribeNewsletterForm,
          url: "/components/blocks/Form/SimpleSubscribeNewsletter",
        },
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/components/blocks/Form/TwoColContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started",
          component: GetStartedCTA,
          url: "/components/blocks/CTA/GetStarted",
        },
        GetStartedLight: {
          name: "Get Started Light",
          component: GetStartedLightCTA,
          url: "/components/blocks/CTA/GetStartedLight",
        },
        DownloadApp: {
          name: "Download App",
          component: DownloadAppCTA,
          url: "/components/blocks/CTA/DownloadApp",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/components/blocks/Footer/SimpleFiveColumn",
        },
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/components/blocks/Footer/FiveColumnWithInputForm",
        },
        FiveColumnWithBackground: {
          name: "Five Column With background",
          component: FiveColumnWithBackgroundFooter,
          url: "/components/blocks/Footer/FiveColumnWithBackground",
        },
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/components/blocks/Footer/FiveColumnDark",
        },
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
