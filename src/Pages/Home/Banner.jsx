import banner from "../../assets/teaching.webp";
const Banner = () => {
    return (
        <div className=" flex-col-reverse lg: flex  lg:justify-evenly lg:items-center ">
            
            <div><div className="card bg-base-100  ">
  <div className="card-body">
    <h2 className="card-title text-2xl">Let Us Help You With College Admission</h2>
    <p className="">Lorem ipsum dolor sit amet conlabore tenetur doloremque inventore voluptas. Temporibus voluptatum quod laudantium!</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mt-5">Book Your Strategy Session</button>
    </div>
  </div>
</div></div>
<div>
                <img src={banner} alt="" />
            </div> 

        </div>
    );
};
export default Banner;