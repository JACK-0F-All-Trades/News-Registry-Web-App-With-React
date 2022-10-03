import React, { Component } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {



    constructor() {
        super();
        this.state = {
            loading: false,
            articles: [],
            page: 1,
            totalResults: 0
        }
    }

    fetchNews = async (url) => {
        let data = await fetch(url);
        return await data.json();
    }
    async componentDidMount() {
        // console.log("inside cmd");
        this.props.setProgress(10)
        this.setState({ loading: true })
        let parsedData = await this.fetchNews(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pagesize=${this.props.pagesize}`)
        this.props.setProgress(30)
        this.setState({ loading: false, articles: parsedData.articles, totalResults: parsedData.totalResults });
        this.props.setProgress(70)
        this.props.setProgress(100)

    }


  


    fetchMoreData = async () => {
      

        let parsedData = await this.fetchNews(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`)
        

        this.setState({ loading: false, 
            articles: this.state.articles.concat(parsedData.articles), 
            page: this.state.page + 1, 
            totalResults: parsedData.totalResults
        });
       


    }
    render() {
        return (
            <>

                <div className='container'>
                    <h1 className='my-4 text-center'>Headlines - Get a taste of Daily Bites</h1>
                    {this.state.loading && <Loader />}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loader />}
                    >
                        <div className='container'>
                            <div className='row'>
                                {this.state.articles.map((element) => {
                                    return <div className='col-md-4 my-2 ' key={element.url}>
                                        <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} url={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>



                    {/* <div className='d-flex justify-content-between my-3'>
                        <button disabled={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div> */}


                </div>




            </>
        )
    }
}

export default News
