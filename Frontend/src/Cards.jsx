import "./Cards.css";

const Cards = () => {
    return (
        <>
            <div className="container">
                {/* <h2>Best Tourist Places</h2> */}
                <div className="cards" style={{
                    backgroundImage: "url('/munnar.jpg')"
                }}>
                    <div className="content">
                        <h3>Munnar</h3>
                        <p> A picturesque hill station renowned for its expansive tea plantations, misty landscapes, and pleasant climate. Visitors can explore the Eravikulam National Park, home to the endangered Nilgiri Tahr, and enjoy panoramic views from spots like Top Station.</p>
                    </div>
                </div>
                <div className="cards" style={{
                    backgroundImage: "url('/alappuzha.jpg')"
                }}>
                    <div className="content">
                        <h3>Alleppey (Alappuzha)</h3>
                        <p>Often referred to as the "Venice of the East," Alleppey is famous for its serene backwaters and houseboat cruises. Tourists can experience the unique ecosystem of the Vembanad Lake and witness traditional village life along the waterways.</p>
                    </div>
                </div>
                <div className="cards" style={{
                    backgroundImage: "url('/thekkady.jpg')"
                }}>
                    <div className="content">
                        <h3>Thekkady</h3>
                        <p>Home to the Periyar National Park, Thekkady is a haven for wildlife enthusiasts. The park offers opportunities for bamboo rafting, nature walks, and sightings of elephants, tigers, and various bird species.</p>
                    </div>
                </div>
                <div className="cards" style={{
                    backgroundImage: "url('/kochi.jpg')"
                }}>
                    <div className="content">
                        <h3>Kochi</h3>
                        <p>A vibrant port city that blends modernity with rich historical heritage. Key attractions include the Fort Kochi area with its colonial architecture, the iconic Chinese fishing nets, and the bustling spice markets of Mattancherry.</p>
                    </div>
                </div>
                <div className="cards" style={{
                    backgroundImage: "url('/wayanad.jpg')"
                }}>
                    <div className="content">
                        <h3>Wayanad</h3>
                        <p>A lush district characterized by its green hills, wildlife sanctuaries, and spice plantations. Highlights include the Edakkal Caves with ancient petroglyphs, the scenic Meenmutty Waterfalls, and trekking opportunities to Chembra Peak.</p>
                    </div>
                </div>
                <div className="cards" style={{
                    backgroundImage: "url('/kovalam.jpg')"
                }}>
                    <div className="content">
                        <h3>Kovalam</h3>
                        <p>A coastal town renowned for its crescent-shaped beaches, particularly Lighthouse Beach, Hawa Beach, and Samudra Beach. It's a popular spot for sunbathing, swimming, and experiencing traditional Ayurvedic treatments.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;