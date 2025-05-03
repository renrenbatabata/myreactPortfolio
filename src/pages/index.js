import Header from "@/component/Header/header"
import { client } from "../../libs/client"
import BlogList from "@/component/Blog/blogList"
import Journey from "@/component/Journey/journey"
import Myskill from "@/component/Myskill/myskill"
import Footer from "@/component/Footer/footer"
import Hero from "@/component/Hero/hero"
import About from "@/component/About/about"

// SSR
export const getServerSideProps = async () => {
  const blogData = await client.get({ endpoint: 'blogs' })
  const journeyData = await client.get({ endpoint: 'journeys' })

  return {
    props: {
      blogs: blogData.contents,
      journeys: journeyData.contents,
    },
  }
}


const App = ({ blogs, journeys }) => {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Myskill />
      <Journey journeys={journeys} />
      <BlogList blogs={blogs} />
      <Footer />
    </>
  )
}

export default App