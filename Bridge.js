
import cableBridge from "./Durgam-Cheruvu-Bridge-1.webp";
import charminarImage from './Charminar_600.jpg';
import biryaniImage from "./biryani.jpg";

const Bridge =() =>{
  const h1style = {
    textAlign: "center"
   }
   const style1={
     backgroundColor: "yellow",
     display: "inline-block",
     padding: "5px",
     marginTop:"10px",
     borderRadius:"10px"
   }
    const style3 = {
        textAlign: "center",
        marginTop: "10px"
       }

    return(
       <div className='hyd4' >
      {/* <h1 style={{backgroundColor: "yellow", textAlign: "center"}}>About Hyderabad</h1> */}
      <img src={charminarImage}
      alt="Charminar in Hyderabad" 
      style={{  display: "block", margin: "0 auto", width: "400px", height:'350px', borderRadius:"10px" }} />
      <h1 style={h1style}>
        <span style={style1}>Charminar</span> 
        </h1>
      <p style={{fontSize:"large"}}>   
         The Charminar's long history includes the existence of a mosque on its top floor for more than 425 years.
         While both historically and religiously significant, 
         it is also known for its popular and busy local markets surrounding the structure, 
         and has become one of the most frequented tourist attractions in Hyderabad. 
         Charminar is also a site of numerous festival celebrations, such as Eid-ul-adha and Eid al-Fitr,
          as it is adjacent to the city's main mosque, the Makkah Masjid. </p>

      <img src={biryaniImage} alt='biyani' className='food'/>
      <h1 className='hyd1'>
        <span className='hyd2'>Famous Biryani</span> 
        </h1>
        <p style={{fontSize:"large"}}>Hyderabadi Dum Biryani, the key dish of the royal kitchen came to India after Emperor Aurangzeb appointed 
          Nizam-Ul-Mulk as the new ruler of Hyderabad. Hyderabad was conquered by the Mughals in the 1630s, 
          and ruled by its Nizams Mughlai culinary traditions got mixed with local traditions to make Hyderabadi cuisine.</p>
    <img  src={cableBridge} alt='bridge' style={{ display: "block", margin: "0 auto", width: "400px", height:'350px', borderRadius:"10px" }}/>
         <h1 style={style3}>
          <span className='bg-warning rounded d-inline p-1 m-1 '>Cable Bridge</span>
         </h1>
         <p style={{fontSize:"large"}}>
         The Durgam Cheruvu Cable Bridge is an extradosed bridge in Hyderabad, Telangana, India. 
         The bridge is located near Inorbit Mall at Madhapur. The bridge connects Jubilee Hills with
          Financial District and eases traffic congestion to Madhapur across Durgam Cheruvu.Each pillar it has 13 
          cables each side.The city experienced a boom in traffic due to the increasing number of cars owned, 
          and the Jubilee Hills to Madhapur commute, which historically took 30 minutes, began to take 60 minutes. 
          The Government of Telangana then put forward a proposal of a bridge through Durgam Cheruvu to ease traffic
           in the area and cut down travel time to 10 minutes
         </p>
      </div>
    );
}
export default Bridge;