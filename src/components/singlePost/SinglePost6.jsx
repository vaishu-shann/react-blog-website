import "./singlePost1.css";

export default function SinglePost6() {
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?cs=srgb&dl=pexels-nuno-obey-127160.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
            Hey, Brave Soul
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>             
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
             Vaishu
            </b>
          </span>
          <span>7 day ago</span>
        </div>
        <p className="singlePostDesc">
        Beautiful hearts<br></br>
        A brave soul believes in magic.<br></br>
        They know the magic is inside<br></br>
        them.<br></br>
        believe in beautiful things.<br></br>
        They know one day every<br></br>
        pain will turn to happiness. Every<br></br>
        face they see around will be smiling
        with ecstasy.<br></br><br></br>

        Beautiful hearts see<br></br>
        magic in every person they meet.<br></br>
        They will have the ability to<br></br>
        make impossible things happen<br></br>

        by saying special words and<br></br>
        doing beautiful things.<br></br>
        Each one<br></br>
        of their hearts will be a place of<br></br>
        joy and peace. No easy pathways<br></br><br></br>
        to attain the magic.<br></br>


        Only by doing<br></br>
        good things to others every<br></br>
        beautiful soul attained a beautiful<br></br>
        heart that believes in beautiful<br></br>
        things.<br></br>
        </p>
      </div>
    </div>

    </>
  );
}
