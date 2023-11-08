import "./index.css"
export function Home(){
  return <div className="pt-20 flex justify-center">
  <div className="w-4/5 pt-10 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-28 md:gap-8"> 
    <div className="p-4 md:order-1">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img
          src="/assets/meeting.jpg"
          alt="Meeting"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <div className="p-4 order-2">
      <div className="text-blue-700 lg:text-5xl sg:text-4xl bold">Our team</div>
      <div className="pt-4 lg:text-2xl sg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet.
      </div>
    </div>
    <div className="p-4 lg:order-3 md:order-4">
      <div className="text-blue-700 lg:text-5xl sg:text-4xl bold">Our mission</div>
      <div className="pt-4 lg:text-2xl sg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet.
      </div>
    </div>
    <div className="p-4 lg:order-4 md:order-3">
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img className="object-cover w-full h-full min-w-200" src="/assets/mission.jpg" alt="Mission statement" />
      </div>
    </div>
    <div className="p-4 order-5 flex justify-center">
      <div className="pb-9/16 relative min-w-200">
        <img src="/assets/product.jpg" alt="Product" />
      </div>
    </div>
    <div className="p-4 order-6">
      <div className="text-blue-700 lg:text-5xl sg:text-4xl bold">Our product</div>
      <div className="pt-4 lg:text-2xl sg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet.
      </div>
    </div>
  </div>
</div>
}