import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";

function App() {

  const [theme, setTheme] = useState('light')

  useEffect( ()=> {
       if(theme === 'dark') {
        document.documentElement.classList.add('dark')
       }
       else{
        document.documentElement.classList.remove('dark')
       }
  },[theme])

  const HandleThemeChange = ()=> {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
  /*   <div className="ml-10 mt-10 mr-10">

      <h1 className=" p-10 text-[50px] font-bold underline border-8
      sm:bg-red-950 md:bg-blue-950 lg:bg-green-950 xl:bg-black
      border-red-950 text-green-700">
        Hello world!
      </h1>
      <br />
      <div className="border-8 border-red-800 w-96">
        <div class="w-80 border-8">w-80</div>
        <div class="w-64 border-8">w-64</div>
        <div class="w-48 border-8">w-48</div>
        <div class="w-40 border-8">w-40</div>
        <div class="w-32 border-8">w-32</div>
        <div class="w-24 border-8">w-24</div>
        Width Property
      </div>
      <div className="container mx-auto px-4 border-8 border-blue-950
       lg:bg-red-950">
        <div className="w-full max-w-64 border-8 border-red-950"></div>
        <div class="min-w-80 border-8 border-red-500">min-w-80</div>
        <div class="min-w-64 border-8 border-red-500">min-w-64</div>
        <div class="min-w-48 border-8 border-red-500">min-w-48</div>
        <div class="min-w-40 border-8 border-red-500">min-w-40</div>
        <div class="min-w-32 border-8 border-red-500">min-w-32</div>
        <div class="min-w-24 border-8 border-red-500">min-w-24</div>
        <div class="min-w-full border-8 border-red-500">min-w-full</div>
      </div>

    </div> */
      <div>
        <LandingPage change={HandleThemeChange}/>
      </div>

  )
}

export default App;