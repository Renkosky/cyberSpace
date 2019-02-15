import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListView, PullToRefresh } from "antd-mobile";
import { getAllPosts } from "api/post";
import { findDomNode } from "react-dom";
import Posts from "components/Posts";

let pageIndex = 1;

class ListViews extends Component {
  constructor(props) {
    super(props);
    // const dataSource = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => row1 !== row2
    // });

    this.state = {
      data: [],
      refreshing: true,
      isLoading: false,
      hasMore: false,
      height: document.documentElement.clientHeight,
      useBodyScroll: false
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }
  genData = (pIndex = 1) => {
    // const dataArr = [];
    // for (let i = 0; i < NUM_ROWS; i++) {
    //   dataArr.push(`row - ${pIndex * NUM_ROWS + i}`);
    // }
    return getAllPosts({ page: pIndex });
  };

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    const { tabHeigth } = this.props;
    console.log("updated");

    // let topeight = tabHeigth ? tabHeigth : 160;
    // const hei =
    //   this.state.height - findDomNode
    //     ? findDomNode(this.lv).offsetTop
    //     : window.innerHeight - topeight;
    // this.post().then(res => {
    //   const { posts } = res.data;
    //   console.log(posts);
    //   this.rData = posts;
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(posts),
    //     height: hei,
    //     refreshing: false,
    //     isLoading: false
    //   });
    // });
  }

  componentDidMount() {
    const { getPost } = this.props;
    // const hei =
    //   this.state.height - findDomNode
    //     ? findDomNode(this.lv).offsetTop
    //     : window.innerHeight;
    // this.getPost().then(res => {
    //   const { posts } = res.data;
    //   console.log(posts);
    //   this.rData = posts;
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(posts),
    //     height: hei,
    //     refreshing: false,
    //     isLoading: false
    //   });
    // });
    // this.genData().then(res => {
    //   const { posts } = res.data;
    //   this.rData = posts;
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(posts),
    //     height: hei,
    //     refreshing: false,
    //     isLoading: false
    //   });
    // });
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    //simulate initial Ajax
    this.props.getPost();
    this.setState({
      // dataSource: this.state.dataSource.cloneWithRows(this.rData),
      refreshing: false,
      isLoading: false
    });
    // });
  };

  onEndReached = event => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log("reach end", event);
    this.setState({ isLoading: true });
    this.props.getPost(++pageIndex);
    this.setState({
      isLoading: false
    });
  };

  render() {
    const { postsData, tabHeigth } = this.props;
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    dataSource =
      postsData.length > 0 ? dataSource.cloneWithRows(postsData) : dataSource;
    const height =
      this.state.height - findDomNode
        ? findDomNode(this.lv).offsetTop
        : window.innerHeight;
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: "#F5F5F9",
          height: 8,
          borderTop: "1px solid #ECECED",
          borderBottom: "1px solid #ECECED"
        }}
      />
    );

    const row = (rowData, sectionID, rowID) => {
      return <Posts postData={rowData} />;
    };

    return (
      <div>
        <ListView
          key={this.state.useBodyScroll ? "0" : "1"}
          ref={el => (this.lv = el)}
          dataSource={dataSource}
          renderFooter={() => (
            <div style={{ textAlign: "center" }}>
              {this.state.isLoading ? "Loading..." : ""}
            </div>
          )}
          initialListSize={10}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={
            this.state.useBodyScroll
              ? {}
              : {
                  height: height - tabHeigth,
                  margin: "5px 0",
                  border: "none"
                }
          }
          pullToRefresh={
            <PullToRefresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>
    );
  }
}
ListViews.PropTypes = {
  tabHeigth: PropTypes.number,
  postsData: PropTypes.array,
  getPost: PropTypes.func
};
export default ListViews;
