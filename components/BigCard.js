import React from 'react';
import { Image ,View , Dimensions } from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';


const screenWidth = Dimensions.get("window").width;


export default class BigCard extends React.Component{


    _renderItem({item , index}){
		return (
			<View style = {{borderRadius: 10, overflow: "hidden"}}>
				<Image source={{uri: item.image}} style = {{width: "100%",height: 220}}/>

			</View>
		)
	}

    render(){
        return(
            <Container style={{borderRadius: 10, overflow:"hidden"}}>


                    <Carousel 
                        ref = {c => this.carousel = c}
                        data = {this.props.data}
                        renderItem = {this._renderItem}
                        sliderWidth = {screenWidth}
                        itemWidth = {360}
                        inactiveSlideScale = {0.95}
                        inactiveSlideOpacity = {1}
                        enableMomentum = {true}
                        activeSlideAlignment = {"start"}
                        loop = {true}
                        autoplay = {true}
                        autoplayDelay = {500}
                        autoplayInterval = {3000}
                        contentContainerCustomStyle = {{
                            height: 220,
                            marginLeft: 15
                            
                        }}
                        
                    />
                
                </Container>
            );
        }

    }

const Container = styled.View`
    width : ${screenWidth};
    height : 220px;
`;



const BigCardData = [
	{image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/24/124204.jpg",
	 title: "1"},
	{image: "https://images.indianexpress.com/2021/10/Untitled-design-8-3.jpg",
	title: "2"},
	{image: "https://static.businessworld.in/article/article_extra_large_image/1597056012_CNRvas_amazon_dkblue_noto_email_v2016_us_main_CB468775337_.png",
	title: "3"},
	{image: "https://www.apple.com/newsroom/images/values/corporate/standard/Apple_google-partner-on-covid-19-contact-tracing-technology_04102020_inline.jpg.large.jpg",
	title: "4"},
	{image: "https://cdn.vox-cdn.com/thumbor/yqtyojySwxOky_sxUEjQm6d7Ptw=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/69155664/DSCF1179.0.0.jpg",
	title: "5"}
  ];