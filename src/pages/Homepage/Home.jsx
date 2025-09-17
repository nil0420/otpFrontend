import Firstseg from "./Firstseg"
import Secondseg from "./Secondseg"
import Thirdseg from "./Thirdseg"
import Fourthseg from "./Fourthseg"
import Roller from "./Roller"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Register from "../JoinPage/Register"

const Home = ()=>{
     return (
        <>
         
          <Navbar></Navbar>
          <Firstseg></Firstseg>
          <Secondseg></Secondseg>
          <Thirdseg></Thirdseg>
          <Roller></Roller>
          <Fourthseg></Fourthseg>
          <Footer></Footer>

        </>
     )
}
export default Home