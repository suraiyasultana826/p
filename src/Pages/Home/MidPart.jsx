import essentials from "../../assets/essential.png";
import standard from "../../assets/standard.svg";

import premium from "../../assets/premium.png";

import vip from "../../assets/VIP.jpg";

const MidPart = () =>{
    return (
        <div className="mt-10 ">
          
  
   

    <ul className="flex justify-center items-center gap-4 lg:gap-12">
      <li><a>View All</a></li>
      <li><a>Starter</a></li>
      <li><a>Essential</a></li>
      <li><a>Premium</a></li>
      <li><a>VIP League</a></li>
    </ul>

    <div  className="lg:flex justify-center items-center  lg:gap-4">
        <div><div className="card bg-base-100 w-96 ">
  <figure className="px-10 pt-10">
    <img
      src={essentials}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Essential</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
        <div><div className="card bg-base-100 w-90 ">
  <figure className="px-10 pt-10">
    <img
      src={standard}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Standard</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
        <div><div className="card bg-base-100 w-96 ">
  <figure className="px-10 pt-10">
    <img
      src={premium}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Premium</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
        <div><div className="card bg-base-100 w-96 ">
  <figure className="px-10 pt-10">
    <img
      src={vip}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">VIP</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div></div>
    </div>
  </div>
 

    );
};
export default MidPart;