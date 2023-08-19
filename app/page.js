import Feed from "./components/feed"

const Home = () => {
  return (
    <section className="w-full flex flex-col items-center">
        <h1 className="text-center mt-5 font-extrabold text-5xl leading-[1.15] sm:text-6xl">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="text-center bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
            AI-Power Prompts
          </span>
        </h1>
        <p className="mt-5 text-lg text-center sm:text-xl max-w-2xl">
          Promptopia is an open-source AI prompting tool for modern world to discover, 
          create and share creative prompts
        </p>
        
        <Feed />
    </section>
  )
}

export default Home


// className="w-[100vw] min-h-[100vh] fixed flex justify-center pt-32 pr-6 pb-40 pl-6" 