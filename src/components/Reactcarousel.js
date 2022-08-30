import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function Reactcarousel() {
  return (
    <Carousel
    axis='vertical'
    autoPlay={true}
    infiniteLoop={true}
    interval={3000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
    stopOnHover={true}
    swipeable={true}
    transitionTime={800}
    verticalSwipe='natural'
    
    >
    <div>
        <img alt='items'  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        
    </div>
    <div>
        <img alt='items' src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        
    </div>
    <div>
        <img alt='items' src="https://images.unsplash.com/photo-1616440347437-b1c73416efc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        
    </div>
</Carousel>
  )
}
