import React from 'react';

const Review = () => {
    return (
        <div className="container-fluid mt-5">
            {/*  heading  */}
            <div className="heading mb-5 background1">
                <h1 className="title lh-base fw-bolder">Reviews</h1>
            </div>
            {/* review cards  */}
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5 ">
                <div className="col">
                    <div className="card h-100 background1">
                        <img src="https://previews.123rf.com/images/halfpoint/halfpoint1408/halfpoint140800333/30702719-group-of-young-people-having-fun-in-park-sitting-on-the-grass.jpg" className="card-img-top" alt="slide-image1" />
                        <div className="card-body">
                            <h5 className="card-title title">Anna Michale</h5>
                            <p className="card-text text-light lh-sm mt-3">Best park for group outings, picnics, company or family day out. Attractive packages [including food, gifts, shows and travel to and from the park] are available. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 background1">
                        <img src="https://image.freepik.com/free-photo/medium-shot-people-having-fun-theme-park_23-2148287933.jpg" className="card-img-top" alt="slide-image1" />
                        <div className="card-body">
                            <h5 className="card-title title">Jone Dane</h5>
                            <p className="card-text text-light lh-sm mt-3">Best park for group outings, picnics, company or family day out. Attractive packages [including food, gifts, shows and travel to and from the park] are available. </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 background1">
                        <img src="https://cdn.cheapism.com/images/070618_amusement_parks_for_adults_slide_0_fs.max-420x243.jpg" className="card-img-top" alt="slide-image1" />
                        <div className="card-body">
                            <h5 className="card-title title">Michale Gorge</h5>
                            <p className="card-text text-light lh-sm mt-3">Best park for group outings, picnics, company or family day out. Attractive packages [including food, gifts, shows and travel to and from the park] are available. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;