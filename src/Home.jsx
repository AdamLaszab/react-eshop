import "./index.css"
export function Home(){
    return <div className="pt-20 flex justify-center">
    <div className="w-4/5 pt-10 grid grid-cols-2 grid-rows-3 gap-8"> 
    <div className="p-4 flex justify-center items-center">
  <div className="aspect-w-16 aspect-h-9 w-full">
    <img
      src="src/assets/meeting.jpg"
      alt="Meeting"
      className="object-cover w-full h-full"
    />
  </div>
</div>
    <div className="p-4"><div className="text-blue-700 text-5xl bold">Our team</div><div className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet. </div></div>
    <div className="p-4"><div className="text-blue-700 text-5xl bold">Our mission</div><div className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet. </div></div>
    <div className="p-4 flex justify-center items-center"> <div className="aspect-w-16 aspect-h-9 w-full"><img className="object-cover w-full h-full min-w-200" src="src/assets/mission.jpg"></img></div></div>
    <div className="p-4 flex justify-center items-center"><img className="pb-9/16 relative min-w-200" src="src/assets/product.jpg"></img></div>
    <div className="p-4"><div className="text-blue-700 text-5xl bold">Our product</div><div className="pt-4 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a eros odio. Proin mauris nibh, mollis ut sodales vitae, facilisis sed magna. Pellentesque at interdum ante, vel maximus risus. Donec vitae orci mauris. Curabitur vitae bibendum diam. Praesent eleifend eget quam accumsan laoreet. </div></div></div>
    </div>
}