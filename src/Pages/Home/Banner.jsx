import banner from "../../assets/teaching.webp";
const Banner = () => {
    return (

<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={banner}
      className="rounded-lg " />
    <div className="lg:w-1/2">
      <h1 className="text-2xl lg:text-3xl font-bold">Let Us Help You With College Admission</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Book Your Strategy Session</button>
    </div>
  </div>
</div>





//         <div className=" mt-12 lg:flex-row-reverse  lg:justify-evenly lg:items-center ">
        
//             <div>
//                 <img src={banner} alt="" />
//             </div> 

//             <div><div className="card bg-base-100 lg:w-96 ">
//   <div className="card-body">
//     <h2 className="card-title text-2xl">Let Us Help You With College Admission</h2>
//     <p className="">Lorem ipsum dolor sit amet conlabore tenetur doloremque inventore voluptas. Temporibus voluptatum quod laudantium!</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary mt-5">Book Your Strategy Session</button>
//     </div>
//   </div>
// </div></div>

//         </div>
    );
};
export default Banner;