
const Footer  = () => {
  return (
    <div className=" bg-white">

         <footer className=" bg-black/5 text-black py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="text-center sm:text-left">
          <h3 className="text-3xl font-semibold mb-2">About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis neque, ornare sit amet malesuada id, efficitur in nunc.</p>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-3xl font-semibold mb-2">Explore</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-3xl font-semibold mb-2">Connect</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>

        
        
         </div>
  )
}

export default Footer 