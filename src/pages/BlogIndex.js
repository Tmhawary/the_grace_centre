import React, { useState } from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.js";
import { Container , ContentWithPaddingXl} from "../components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Footer from "../components/footers/MiniCenteredFooter";
import { SectionHeading } from "../components/misc/Headings";
import { PrimaryButton } from "../components/misc/Buttons";
import BackgroundAsImage from "../components/hero/BackgroundAsImage";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-teal-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-teal-500 after:w-8`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-teal-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Articles",
  posts = [
    {
      imageSrc:
        " https://www.lalouxschool.com/wp-content/uploads/imgOC.jpg",
      category: "Osteopathy",
      title: "What is Osteopathy and how can it help you",
      description:
       "Osteopaths are taught to encourage the body back toward health using a non invasive measures first. What differentiates their training is this: It focuses on how the structures of our bodies  are deeply linked with how healthy we are. The field was founded upon  manual manipulation, a therapy designed to improve the flow of air and  blood, lymphatic, and other fluids in the body to maximize self-healing  mechanisms and improve the function of our brain, organs, and joints",
       url:`/components/innerPages/ContactUsPage`,
      featured: true
    },
    getPlaceholderPost(),
    getPlaceholderPost1(),
    getPlaceholderPost2(),
    getPlaceholderPost3(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost(),
    getPlaceholderPost()
  ]
}) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  return (
    <AnimationRevealPage>
      <BackgroundAsImage/>
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Category>{post.category}</Category>
                    {/* <CreationDate>{post.date}</CreationDate> */}
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => (
  {
  imageSrc:
    "https://media-exp3.licdn.com/dms/image/C5612AQF2rTxO_WVdaw/article-cover_image-shrink_600_2000/0/1527532651632?e=1628121600&v=beta&t=WFSLt70fo2_de9yAqVLQ3EsBafZgzemZaUEZQ5BxbUc",
  category: "Functional Medicine",
  title: "Why do we need Functional Medicine",
  description:
    <>The functional medicine model is an individualized, patient-centered, science-based approach that empowers patients and practitioners to work together to address the underlying causes of disease and promote optimal wellness. It requires a detailed understanding of each patient’s genetic, biochemical, and lifestyle factors and leverages that data to direct personalized treatment plans that lead to improved patient outcomes. <br/>By addressing root cause, rather than symptoms, practitioners become oriented to identifying the complexity of disease. They may find one condition has many different causes and, likewise, one cause may result in many different conditions. As a result, functional medicine treatment targets the specific manifestations of disease in each individual.</>,
  featured:false
  }
);
const getPlaceholderPost1 = () => (
  {
  imageSrc:
    "https://www.thekingclinic.co.uk/wp-content/uploads/2020/03/osteopathy-manipulation.jpg",
  category: "Osteopathy",
  title: "Why do you need an Osteopath",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
);
const getPlaceholderPost2 = () => (
  {
  imageSrc:
    "https://d2wvwvig0d1mx7.cloudfront.net/data/org/17289/media/img/cache/360x0/1731195_360x0.jpg",
  category: "Fitness Rehabilitation",
  title: "Pilates and Physical Rehabilitation",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
);

const getPlaceholderPost3 = () => (
  {
  imageSrc:
    "https://images.creativemarket.com/0.1.0/ps/8506749/1820/1213/m1/fpnw/wm1/uz04sr2mnvk4ypoef6rdzqc7axa1dhskqg9b9j3a5rebte8i8yefbhj89ll1o3nt-.jpg?1591789716&s=f06dc57040ade813be30ed142335b3a4",
  category: "Nutrition and Lifestyle",
  title: "How to make eating fun again",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
);

