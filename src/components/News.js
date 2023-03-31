import React, { Component } from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defautProps = {
        country: 'in',
        pageSize: 5,
        category: 'general',
        // totalResults:0
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            totalResults: 0,
            page: 1,
            testState: "No Data"
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Hub`;
    }

    async update() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(50);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.update();
    }

    fetchMoreData = async () => {
        // console.log(this.state.page)
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <div className='my-3'>
                <h2 className="text-center">.....Top {this.capitalizeFirstLetter(this.props.category)} Headlines.....</h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading ? <Loading /> : <></>}
                // loader={<Loading/>}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.loading && <Loading />}
                            {this.state.articles.map((element, ind) => {
                                return <div className="col-md-4 my-4" key={ind}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} lastUpdate={element.publishedAt} author={element.author} name={element.source.name} newsUrl={element.url}/>
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </div>

        )
    }
}
