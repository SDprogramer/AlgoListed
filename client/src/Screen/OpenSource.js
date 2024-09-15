import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CCHeaderDarkPlus from '../Components/CCHeaderDarkPlus'
import CCHeaderPlus from '../Components/CCHeaderPlus'
import LeftMenu from '../Components/LeftMenu'
import LeftMenuDark from '../Components/LeftMenuDark'
import SimpleFooter from '../Components/SimpleFooter'
import LockIcon from '@material-ui/icons/Lock';
import { openSourceFilters } from '../Components/openSourceFilters'

const OpenSource = () => {
    const [needDarkMode, setNeedDarkMode] = useState(false);
    const [tabName, setTabName] = useState("swags");

    useEffect(() => {
        let selectedTheme = localStorage.getItem("selectedTheme");
        if (selectedTheme === 'dark') setNeedDarkMode(true);
    }, []);

    useEffect(() => {
        document.title = "Open Source - Algolisted";
    }, []);

    const filters = openSourceFilters.map((item) => {
        return item.lock === true ? (
            <div key={item.id} className='locked-feature filter'>
                {item.text}
                <LockIcon />
            </div>
        ) : (
            <a
                href={`/open-source/${item.domainFilter}`}
                key={item.id}
                className={item.domainFilter === tabName ? 'filter selected' : 'filter'}
            >
                {item.text}
            </a>
        );
    });

    console.log("needDarkMode : ", needDarkMode);
    const toggleDarkMode = () => {
        setNeedDarkMode(!needDarkMode);
    };

    const swagsData = [
        {
            "swagTitle": "Huddle01",
            "company": "Huddle01",
            "difficulty": "medium",
            "swagTags": ["cash", "clothing", "expired", "hacktoberfest"],
            "desc": "Join Huddle01's Hacktoberfest 2023 challenge! Win from a $300/$100 pool prize for advanced/intermediate level respectively. Beginners can earn unique POAP tokens and merchandise.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "OpenBB",
            "company": "OpenBB",
            "difficulty": "medium",
            "swagTags": ["clothing", "expired", "hacktoberfest"],
            "desc": "Earn a T-shirt or hat from OpenBB in Hacktoberfest. Contribute by making no-code contributions, code enhancements, adding a non-extension feature, or creating a custom extension.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Revert",
            "company": "Revert",
            "difficulty": "medium",
            "swagTags": ["clothing", "expired", "hacktoberfest", "mug", "stickers"],
            "desc": "Earn spooky pumpkins for every PR merged in the Hacktoberfest at Revert! Collect as many pumpkins as you can before Halloween 2023 strikes and win some amazing swags!!",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "VeSoft",
            "company": "VeSoft",
            "difficulty": "medium",
            "swagTags": ["clothing", "digitalbadge", "expired", "hacktoberfest", "mascotdoll", "mug", "stickers"],
            "desc": "Earn digital badges and special SWAG from VeSoft in Hacktoberfest! With 1, 3, or 5 accepted PRs on vesoft-inc or nebula-contrib, receive different badges and amazing SWAG.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Interledger",
            "company": "Interledger",
            "difficulty": "medium",
            "swagTags": ["clothing", "expired", "hacktoberfest", "stickers"],
            "desc": "Earn exclusive Interledger swag this Hacktoberfest! Get a T-shirt with 1+ accepted PRs. Get limited edition swag with 4+ accepted PRs.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Haystack",
            "company": "Haystack",
            "difficulty": "medium",
            "swagTags": ["expired", "hacktoberfest", "stickers"],
            "desc": "Contribute to open issues with the 'hacktoberfest' tag at Haystack's repository and grab some exclusive stickers!",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Dyrector.io",
            "company": "Dyrector.io",
            "difficulty": "medium",
            "swagTags": ["clothing", "expired", "hacktoberfest", "stickers"],
            "desc": "Contribute to any issue of dyrector.io and win an exclusive cap and stickers! Swag can optionally be personally delivered at esteemed events like KubeCon EU, Web Summit, and more if you're in Europe.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Covalent",
            "company": "Covalent",
            "difficulty": "medium",
            "swagTags": ["cash", "expired", "hacktoberfest"],
            "desc": "Join the Covalent Hacktoberfest. Get rewarded with cash prizes based on the complexity and level of your contributions. Beginners can earn $25 per merged PR, while experts have an opportunity to earn $100.",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        },
        {
            "swagTitle": "Appblock",
            "company": "Appblock",
            "difficulty": "medium",
            "swagTags": ["cash", "expired", "hacktoberfest"],
            "desc": "Each accepted PR to AppBlock during the Hacktoberfest will win ₹5,000. You have a chance to win up to ₹30,000!!",
            "link": "Check it out",
            "logo": "https://appwrite.io/assets/logomark/logo.png"
        }
    ]


    return (
        <GrandContainer needDarkMode={needDarkMode}>
            <MobContainer>
                We are still working on Responsive Version of the website, please view the site with
                width more than 1100px, a standard laptop or tablet landscape.
                <img src="https://media4.giphy.com/media/13FrpeVH09Zrb2/giphy.gif" alt="" />
            </MobContainer>
            <Container needDarkMode={needDarkMode}>
                {
                    needDarkMode ? <CCHeaderDarkPlus needDarkMode={needDarkMode} toggleDarkMode={toggleDarkMode} /> : <CCHeaderPlus needDarkMode={needDarkMode} toggleDarkMode={toggleDarkMode} />
                }
                {
                    needDarkMode ? <LeftMenuDark marked={"open-source"} /> : <LeftMenu marked={"open-source"} />
                }
                {/* ---> change this all-blogs to your desired page-id */}

                <div className="cc-middle-content">
                    <h1 className='main-heading'>Open Source</h1>
                    <p className="heading-supporter">
                        Looking for the ultimate open-source experience? Algolisted is your go-to platform, offering a comprehensive collection of resources, updates, and community-driven projects. Whether you're after the latest open-source tools, opportunities to join thriving communities, or insights on exclusive bounties and swags, you'll find everything in one place. With regular updates and collaboration features, Algolisted ensures you stay ahead while contributing to impactful projects. Dive in today and unlock the world of open-source!
                    </p>
                    <div className="message">
                        <div className="icon"></div>
                        <div className="text">
                            We're always open to voluntary contributions and collaborations—reach out at <a href="mailto:nayak@algolisted.com">nayak@algolisted.com</a>
                        </div>
                    </div>
                    <Filters needDarkMode={needDarkMode}>
                        {filters}
                    </Filters>

                    <BoxContainer>
                        {swagsData.map((swag, index) => (
                            <div key={index} className="box">
                                <img src={swag.logo} alt={`${swag.company} logo`} className="box-logo" />
                                <h3 className="box-title">{swag.swagTitle}</h3>
                                <p className="box-desc">{swag.desc}</p>
                                <p className="box-tags">
                                    {swag.swagTags.map((tag, idx) => (
                                        <span key={idx} className="box-tag">{tag}</span>
                                    ))}
                                </p>
                                <a href={swag.link} className="box-link">Check it out</a>
                            </div>
                        ))}
                    </BoxContainer>
                </div>
                <SimpleFooter />
            </Container>
        </GrandContainer>
    )
}

export default OpenSource

const GrandContainer = styled.div`

`

const MobContainer = styled.div`
  width: 100vw;
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;

  img{
    width: calc(100% - 80px);
    margin: 40px;
    border-radius: 5px;
    display: block;
  }

  @media only screen and (min-width: 1099px){
    display: none;
  }
`

const Container = styled.div`
    position: relative;
    padding-bottom: 80px;

    @media only screen and (max-width: 1099px){
        display: none;
    }

    display: flex;
    justify-content: space-between;
    padding-left: 200px;
    

    background-color: ${(props) => (props.needDarkMode ? '#313338' : 'transparent')};

    a{
      color: ${(props) => (props.needDarkMode ? '#6d93d8' : '#18489f')};
    }

    input{
      background-color: transparent;
    }

    .cc-middle-content{
      min-height: 100vh;
      width: 100%;
      /* padding: 80px min(120px, 5vw) 50px min(120px, 5vw); */
      padding: 80px 120px 50px 120px;
      position: relative;
      width: 100%;
      max-width: 1360px;
      min-width: 850px;
      margin: auto;

      @media only screen and (max-width: 1200px){
        padding: 80px 50px 50px 50px;
      }


      .main-heading{
          font-size: 1.65rem;
          font-weight: 600;
          color: ${(props) => (props.needDarkMode ? '#e5e6e8' : '#292929')};
      }

      .heading-supporter{
          font-size: 1.05rem;
          margin-bottom: 10px;
          font-weight: 400;
          color: ${(props) => (props.needDarkMode ? '#ffffffa6' : '#696168')};

          a{
            color: ${(props) => (props.needDarkMode ? '#18489f' : '#18489f')};
            font-size: 0.95rem;
            font-weight: 300;
            margin-left: 0.25rem;
          }
      }

      .message{
        display: inline-block;
        /* display: flex; */
        /* align-items: center; */
        background-color: ${(props) => (props.needDarkMode ? '#444754' : '#d5f7e1')};
        border-radius: 5px;
        padding: 10px;
        margin: 20px 0 10px 0;

        .text{
            font-size: 0.8rem;
            color: ${(props) => (props.needDarkMode ? '#b7b8ba' : '#13803b')};
            font-weight: 300;

            b{
                font-weight: 500;
                color: ${(props) => (props.needDarkMode ? '#b7b8ba' : '#13803b')};
            }
        }
      }
    }
`

const Filters = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px 0 10px 0;

	.filter {
		padding: 7.5px 15px;
		font-size: 0.8rem;
		border: 1px solid ${(props) => (props.needDarkMode ? '#514f4f' : '#b9afaf')};
		border-radius: 500px;
		margin: 0px 5px 5px 0px;
		font-weight: 300;
		text-decoration: none;
    	background-color: ${(props) => (props.needDarkMode ? 'transparent' : 'transparent')};
    	color: ${(props) => (props.needDarkMode ? '#e5e5e5' : '#333')};

		svg{
			font-size: 1rem;
			margin-bottom: -0.2rem;
			margin-left: 5px;
			fill: #71c929;
		}

		&:hover {
			background-color: ${(props) => (props.needDarkMode ? '#4a4d5a' : '#f1f1f1')};
			border: 1px solid ${(props) => (props.needDarkMode ? '#fff' : '#333')};
			color: ${(props) => (props.needDarkMode ? '#e5e5e5' : 'inherit')};
			transition-duration: 250ms;
			cursor: pointer;
		}
	}


	.filter2{
		position: relative;
		padding: 7.5px 15px;
		font-size: 0.8rem;
		border: 1px solid #b9afaf;
		border-radius: 500px;
		margin: 0px 5px 5px 0px;
		font-weight: 300;
		text-decoration: none;
		color: ${(props) => (props.needDarkMode ? '#e5e5e5' : '#333')};
		display: flex;
		align-items: center;

		svg{
			font-size: 1rem;
			margin-left: 5px;
			fill: ${(props) => (props.needDarkMode ? '#e5e5e5' : '#333')};
		}

		&:hover {
			background-color: ${(props) => (props.needDarkMode ? '#4a4d5a' : '#f1f1f1')};
			border: 1px solid ${(props) => (props.needDarkMode ? '#fff' : '#333')};
			color: ${(props) => (props.needDarkMode ? '#e5e5e5' : 'inherit')};
			transition-duration: 250ms;
			cursor: pointer;
		}

		svg{
			font-size: 1rem;
			margin-left: 5px;
		}

		.tag{
			position: absolute;
			padding: 2.5px 7.5px;
			font-size: 0.65rem;
			background-color: orange;
			border-radius: 100px;
			left: -10px;
			top: -12.5px;
		}
	}

  .locked-feature{
    &:hover{
      background-color: ${(props) => (props.needDarkMode ? '#4a4d5a' : '#f1f1f1')};
      color: ${(props) => (props.needDarkMode ? '#fff' : 'inherit')};
      border: 1px solid ${(props) => (props.needDarkMode ? '#e5e5e5' : '#333')};
      transition-duration: 250ms;
    }
  }

	.selected {
		/* background-color: #ded7d7;
    color: #111; */
    color: ${(props) => (props.needDarkMode ? '#4a4d5a' : '#ebdddd')};
    border: 1px solid ${(props) => (props.needDarkMode ? '#fff' : '#201f1f')};
    background-color: ${(props) => (props.needDarkMode ? '#e5e5e5' : '#201f1f')};

    &:hover {
      color: ${(props) => (props.needDarkMode ? '#4a4d5a' : '#ebdddd')};
      border: 1px solid ${(props) => (props.needDarkMode ? '#fff' : '#201f1f')};
      background-color: ${(props) => (props.needDarkMode ? '#e5e5e5' : '#201f1f')};
			transition-duration: 250ms;
			cursor: pointer;
		}
	}

	@media only screen and (max-width: 1100px) {
		margin: 10px 0 10px 0;

		.filter {
			padding: 5px 15px;
			font-size: 0.7rem;
			margin: 0px 5px 5px 0px;
		}

		.selected {
			/* background-color: #ded7d7;
      color: #111; */
			border-color: #201f1f;
			background-color: #201f1f;
			color: #ebdddd;
		}
	}


`;


const BoxContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;

    .box{
        width: calc(33.3333% - 20px);
        margin-bottom: 25px;
        border-radius: 10px;
        border: 1px solid rgb(209, 213, 219);
        background-color: white;
        padding: 20px;

        .box-logo{
            height: 40px;
        }

        .box-title{
            font-size: 1.05rem;
            font-weight: 500;
        }        

        .box-desc{
            font-size: 0.85rem;
            font-weight: 300;
        }

        .box-tags{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: 5px 0;

            .box-tag{
                font-size: 0.75rem;
                padding: 5px;
                border-radius: 5px;
                margin-right: 5px;
                background-color: orange;
                margin-bottom: 5px;
            }
        }
    }
`