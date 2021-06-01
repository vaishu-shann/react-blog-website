import "./singlePost1.css";

export default function SinglePost1() {
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1024975.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Until My Last Breathe
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
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
              I find ways to seek your attention<br></br>
              and to be honest, I feel so good<br></br>
              when you bestow the bestest kind<br></br>
              of love to me through the warmth<br></br>
              of your arms. I feel so much secured<br></br>
              and so much loved. You give me<br></br>
              peace that my heart craves for the<br></br>
              most. Nothing in this world can<br></br>
              understand me the way you do.<br></br>
              My bad days gets a shine and I get<br></br>
              a ray of hope through the way you<br></br>
              help me out and tell me things gonna<br></br>
              be okay. You have always stood by me<br></br>
              whenever I needed you, in everyday<br></br>
              life and my toughest times as well.<br></br>
              You are the reason I smile, even when<br></br>
              I don’t want to or even when I am sad.<br></br>
              My happy times gets better with you.<br></br>
              Nothing in this world, I seek for more<br></br>
              than your love and the warmth you<br></br>
              give me. I hope, this love that we have<br></br>
              remains the same until my last breath.<br></br>

        </p>
      </div>
    </div>

    </>
  );
}
