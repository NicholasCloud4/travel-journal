import React from 'react'
import Header from "./Components/Header"
import Entry from "./Components/Entry"
import data from "./data"

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */




function App() {

    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />


            // <Entry
            //     key={entry.id}
            //     img={{
            //         src: entry.img.src,
            //         alt: entry.img.alt
            //     }}
            //     title={entry.title}
            //     country={entry.country}
            //     googleMapsLink={entry.googleMapsLink}
            //     dates={entry.dates}
            //     text={entry.text}
            // />

        )
    })

    return (
        <>
            <Header />
            {entryElements}
            {/* <Entry
        img={
          {
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji in Japan",
          }
        }
        title={"Mount Fuji"}
        country={"Japan"}
        googleMapsLink={"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"}
        dates={"12 Jan, 2021 - 24 Jan, 2021"}
        text={"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."}
      /> */}

        </>
    )
}

export default App
