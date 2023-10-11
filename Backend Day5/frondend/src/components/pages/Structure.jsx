import React from 'react';
import '../../assets/styles/Structure.css'

import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Structure() {
    return (
        <div>
        <Header/>
        <section id="content" style={{ marginBottom: '0px', transform: 'none', paddingTop: '60px' }}>
            <div className="container clearfix" style={{ transform: 'none' }}>
                <div className="row" style={{ paddingBottom: '15px' }}>
                    <div className="col-md-7">
                        <h2 style={{ paddingBottom: '20px' }}> <span>Building an Edible Garden</span></h2>
                        <p>Building a garden is a very rewarding experience, and edible gardens in particular are a point of pride for most gardeners. Edible gardens can be designed to suit any style or ability and should always be designed in a way that is practical for the users.</p>
                        <p>If you are new to vegetable gardening, start small and focus on growing a handful of crops. Visit our 'Growing Guides' and select the 'Easy To Grow' option for more information. A small raised bed is the perfect way to get started as it is easy to set up and maintain. Most raised beds can be purchased from your local hardware store or nursery and come in flat packs, with pieces that slot together without the use of any tools.</p>
                        <p>Once you have the hang of gardening, you can expand your growing space by adding more raised beds or by starting an in-ground garden. If you have a small space to work with, then try container gardening, see our 'Small Scale Gardening' blog in the 'Kitchen & Garden' section for more information.</p>
                        <p>Site selection is another important consideration as most edible crops require a minimum of six to eight hours of sunlight each day in order to crop well. A full sun position is particularly important for fruiting crops such as eggplant, tomatoes, cucumbers, peppers, and squash varieties. If your garden is on the shady side, there is still plenty you can grow, including a large range of herbs and leafy greens! Visit our 'Growing Guides' and select the 'Shade Tolerant' option for more information.</p>
                    </div>
                    <div className="col-md-5 imagescol">
                        <div className="row" style={{ paddingBottom: '30px' }}>
                            <div className="col">
                                <img className="lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20190513_172748/71eb9d6a6a588a83b3ba691efb4c9908.jpg" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                            <div className="col">
                                <img className="lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20181120_070744-1/162c24ab54eab11262c859ce14c2dfd0.jpg" alt="Image2 ediblegarden" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="ls-is-cached lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/raisedbed2/055317eb4f12e173b5a06ca3d7838858.jpg" data-src="/media/CACHE/images/static/imgs/plants/raisedbed2/055317eb4f12e173b5a06ca3d7838858.jpg" alt="Image3 ediblegarden" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                            <div className="col">
                                <img className="lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20191123_153630/e0cbb36b67dc36acf5250cd7b88f525d.jpg" data-src="/media/CACHE/images/static/imgs/plants/IMG_20191123_153630/e0cbb36b67dc36acf5250cd7b88f525d.jpg" alt="Image4 ediblegarden" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingBottom: '15px' }}>
                    <div className="col-md-7">
                        <h2 style={{ paddingBottom: '20px' }}> <span>Utilizing Your Space</span></h2>
                        <p>Vertical gardening is a great way of utilizing valuable growing space. Pumpkins, Melons, Gourds, Passion Fruit, Peas, Beans, Cucumbers, Indeterminate Tomato varieties and more can be trained up a trellis or archway. Vertical gardening not only increases crop production but also makes for a stunning feature in your garden, adding height and dimension to the space.</p>
                        <p>If you have a small growing space, look for crops that offer repeat harvests and high yields for the amount of space required. Zucchini, Chard, Kale, and Eggplant are heavy croppers that require very little space and are perfect for container gardening.</p>
                        <p>Herbs and lettuces are also great crops to have around as they are used frequently in the kitchen. Think of all the recipes that require a little pinch of a herb that you don't always have on hand, or how many times you have wanted to make a side salad but didn't have any lettuce. As these crops are used often, it's a good idea to strategically place them close to your kitchen for convenient access. Lighting is also a great feature in an edible garden as it makes for convenient late-night dinner harvests.</p>
                        <p>Happy Gardening!</p>
                    </div>
                    <div className="col-md-5 imagescol">
                        <div className="row" style={{ paddingBottom: '30px' }}>
                            <div className="col">
                                <img className="ls-is-cached lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/slope2/2de1477f8ff57967ea9f120130d539b3.jpg" data-src="/media/CACHE/images/static/imgs/plants/slope2/2de1477f8ff57967ea9f120130d539b3.jpg" alt="Image gardendesign" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                            <div className="col">
                                <img className="ls-is-cached lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/design2/687d0c25e4f1c572509504c1af9093d0.jpg" data-src="/media/CACHE/images/static/imgs/plants/design2/687d0c25e4f1c572509504c1af9093d0.jpg" alt="Image2 gardendesign" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="ls-is-cached lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20220615_1642405/f498c921b646582117fe9d107d556b17.jpg" data-src="/media/CACHE/images/static/imgs/plants/IMG_20220615_1642405/f498c921b646582117fe9d107d556b17.jpg" alt="Image3 gardendesign" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                            <div className="col">
                                <img className="ls-is-cached lazyloaded" src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20190903_203844/d8465d131c0a29e6548b3d46b08bbf82.jpg" data-src="/media/CACHE/images/static/imgs/plants/IMG_20190903_203844/d8465d131c0a29e6548b3d46b08bbf82.jpg" alt="Image4 gardendesign" style={{ opacity: 1, borderRadius: '5px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </div>
    );
}

export default Structure;
