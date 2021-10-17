import React from 'react'

import Section from '../../../structure/Section'
import QueryController from '../../../structure/QueryController'
import LeftRightSplit from '../../../structure/LeftRightSplit'
import Side from '../../../structure/Side'
import PolkaDotArray from './components/PolkaDotArray'
import Bullet from '../../../structure/Bullet'

import ArticlePreview from '../../components/ArticlePreview'

import styles from './Page.module.css'

import Link from 'next/link'

export default function Page(props) {
    const aboutPanel__content = <>
        <h1 style={{fontSize:75,fontWeight:900}}>adr</h1>
        <p style={{lineHeight:2,paddingTop:20}}>{props.bio}</p>

        <p style={{lineHeight:2,paddingTop:50,color:'var(--about-panel-subheader-color)',fontFamily: "'DM Mono', monospace"}}>follow me</p>
        <div className={styles.SocialsWrapper}>
            {
                Object.entries(props.socials).map((ent) => {
                    const [k, v] = [ent[0], ent[1]]

                    return <Link key={k} href={v[1]}>
                        <div className={styles.SocialsWrapper__Row}>
                            <svg style={{fill: 'var(--about-panel-paragraph-color)', paddingTop: 1}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"> { v[2] } </svg>
                            <div style={{height:24, paddingTop:10, marginLeft:10, marginRight:10}}><Bullet size={4} color='var(--about-panel-paragraph-color)'/></div>
                            <p>{ v[0] }</p>
                        </div>  
                    </Link>
                })
            }
        </div>
    </>

    const blogPosts = props.blogPosts || []

    blogPosts.sort((a, b) => {
        return b.date - a.date;
    })

    return (<>
        <Section id="about" style={{paddingBottom:30}}>
          <LeftRightSplit maxWidth={1800}>

            {/* Controller for left panel */}
            <QueryController queries={{
              
              /*********/
              '(min-width:550px)': <Side key="left" side="left" style={{maxWidth:360}}>
                <QueryController queries={{
                  '(min-width: 800px)': <div key="left__wrapper" style={{paddingLeft:100,paddingTop:80}}>{ aboutPanel__content }</div>,
                  '(min-width: 500px)': <div key="left__wrapper" style={{paddingLeft:75,paddingTop:80}}>{ aboutPanel__content }</div>,
                  '(min-width: 360px)': <div key="left__wrapper" style={{paddingLeft:50,paddingTop:80}}>{ aboutPanel__content }</div>,
                  '': <div key="left__wrapper" style={{paddingLeft:35,paddingRight:35,paddingTop:80}}>{ aboutPanel__content }</div>
                }}/>
              </Side>,

              /*********/
              '(min-width:350px)': <div style={{width:'100%',display:'block',paddingLeft:75,paddingRight:75,paddingTop:80}}>
                <div style={{margin:'auto',maxWidth:250}}>{ aboutPanel__content }</div>
              </div>,

              /*********/
              '(min-width:300px)': <div style={{width:'100%',display:'block',paddingLeft:50,paddingRight:50,paddingTop:80}}>
                <div style={{margin:'auto',maxWidth:250}}>{ aboutPanel__content }</div>
              </div>,

              /*********/
              '': <div style={{width:'100%',display:'block',paddingLeft:25,paddingRight:25,paddingTop:80}}>
                <div style={{margin:'auto',maxWidth:250}}>{ aboutPanel__content }</div>
              </div>
            }}/>

            {/* Controller for right panel */}
            <QueryController queries={{

              /*********/
              '(min-width:800px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:115,paddingTop:140}}>
                    <QueryController queries={{
                        '(min-width:1050px)': <PolkaDotArray key="right__feature" length={5} style={{paddingTop:30}}/>,
                        '(min-width:950px)': <div style={{paddingTop:100}} key="right__feature"><PolkaDotArray length={4} colorOffset={1} style={{paddingTop:30}}/></div>,
                        '': <div style={{paddingTop:200}} key="right__feature"><PolkaDotArray length={3} colorOffset={1} style={{paddingTop:30}}/></div>
                    }}/>,
                </Side>,

              /*********/
              '(min-width:750px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:95,paddingTop:340}}>
                    <PolkaDotArray key="right__feature" length={3} colorOffset={1} style={{paddingTop:30}}/>
                </Side>,
            
              /*********/
              '(min-width:650px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:80,paddingTop:340}}>
                <PolkaDotArray key="right__feature" length={3} colorOffset={1} style={{paddingTop:30}}/>
              </Side>,

              /*********/
              '(min-width:550px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:80,paddingTop:340}}>
                <PolkaDotArray key="right__feature" length={3} colorOffset={1} invertedStaircase={true} style={{paddingTop:30}}/>
              </Side>,

              /*********/
              '(min-width:450px)': <Side key="right" side="right" style={{maxWidth:360,paddingRight:80,transform:'translateY(-110px)'}}>
                <PolkaDotArray key="right__feature" length={3} size={2} colorOffset={1} invertedStaircase={true}/>
              </Side>,

              /*********/
              '': <Side key="right" side="right" style={{maxWidth:360,paddingTop:30,transform:'translateY(-110px)',paddingRight:'calc(50% - 105px)'}}>
                <PolkaDotArray key="right__feature" length={3} size={2} colorOffset={1} invertedStaircase={true}/>
              </Side>
            }}/>

          </LeftRightSplit>
        </Section>

        <Section id="blog">
            <QueryController queries={{

                /*********/
                '(min-width:1000px)': <div key="blog"/* Blog Content */ style={{maxWidth:800,margin:"auto",paddingBottom:50}}>
                    <h1 style={{paddingTop:100,paddingBottom:30,fontSize:40}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,

                /*********/
                '(min-width:800px)': <div key="blog" /* Blog Content */ style={{paddingLeft:100,paddingRight:100,paddingBottom:50}}>
                    <h1 style={{paddingTop:100,paddingBottom:30,fontSize:40}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,

                /*********/
                '(min-width:500px)': <div key="blog" /* Blog Content */ style={{paddingLeft:75,paddingRight:75,paddingBottom:50}}>
                    <h1 style={{paddingTop:100,paddingBottom:30,fontSize:40}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,     

                /*********/
                '(min-width:400px)': <div key="blog" /* Blog Content */ style={{paddingBottom:50}}>
                    <h1 style={{paddingTop:150,paddingBottom:0,fontSize:40,margin:'auto',maxWidth:250}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,  
                
                /*********/
                '(min-width:350px)': <div key="blog" /* Blog Content */ style={{paddingBottom:50}}>
                    <h1 style={{maxWidth:250,paddingLeft:75,paddingRight:75,fontSize:40,paddingTop:150,paddingBottom:25 }}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,

                /*********/
                '(min-width:300px)': <div key="blog" /* Blog Content */ style={{paddingBottom:50}}>
                    <h1 style={{maxWidth:250,paddingLeft:50,paddingRight:50,fontSize:40,paddingTop:150,paddingBottom:25}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>,


                /*********/
                '': <div key="blog" /* Blog Content */ style={{paddingBottom:50}}>
                    <h1 style={{maxWidth:250,paddingLeft:25,paddingRight:25,fontSize:40,paddingTop:150,paddingBottom:25}}>Blog</h1>
                        {
                            blogPosts.map(post => {
                            return <ArticlePreview key={post.id} data={post}/>
                        })
                    }
                </div>                  
            }}/>
        </Section>
    </>)
}
