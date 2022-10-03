import React, { Component } from 'react'
import Loader from './Loader';
import Newsitem from './Newsitem'

export class News extends Component {



    constructor() {
        super();
        this.state = {
            loading: false,
            articles: [],
            page :1
        }
    }

    fetchNews = async (url) => {
        let data = await fetch(url);
        return await data.json();
    }
    async componentDidMount(){
        // console.log("inside cmd");
        this.setState({loading:true})
        let parsedData = await this.fetchNews(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3a2e8e79e8a40ef965b09d2b1c88ecf&page=1&pagesize=${this.props.pagesize}`)
        this.setState({loading:false, articles: parsedData.articles, totalResults: parsedData.totalResults }); 
    }


    handlePrevClick = async ()=>{
        this.setState({loading:true});
        let parsedData = await this.fetchNews(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3a2e8e79e8a40ef965b09d2b1c88ecf&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`)
        this.setState({loading:false, articles: parsedData.articles, page : this.state.page - 1}); 


    }
    handleNextClick = async () =>{
        
        if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

        }else{
            this.setState({loading:true});
            let parsedData = await this.fetchNews(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3a2e8e79e8a40ef965b09d2b1c88ecf&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`)
            this.setState({loading:false ,articles: parsedData.articles, page : this.state.page + 1}); 
        }
        
    }

    render() {
        return (
            <>

                <div className='container'>
                    <h1 className='my-3'>Headlines - Get a taste of Daily Bites</h1>
                    {this.state.loading && <Loader/>}
                    <div className='row'>
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className='col-md-4 my-2 ' key={element.url}>
                                <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} url={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}/>
                            </div>
                        })}
                    </div>

                    <div className='d-flex justify-content-between my-3'>
                    <button disabled={this.state.page ===1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                    

                </div>

            


            </>
        )
    }
}

export default News
