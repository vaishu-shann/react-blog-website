import "./singlePost1.css";

export default function SinglePost3() {
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6230973/pexels-photo-6230973.jpeg?cs=srgb&dl=pexels-anna-tarazevich-6230973.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Hello Stranger!
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
          <span>2 day ago</span>
        </div>
        <p className="singlePostDesc">
            𝘥𝘦𝘢𝘳 𝘴𝘵𝘳𝘢𝘯𝘨𝘦𝘳,<br></br>

            How have you been lately?<br></br>
            I guess, many things are messed up, scattered here and there and you don’t have the strength to assemble them.<br></br>
            well, today i thought of telling you, not through a quote, but through this caption, a small piece i am writing, because i’ve been acknowledging the same.<br></br>
            loving ourselves becomes really tough, sometimes, it seems to be impossible. hearing things from people that shouldn’t matter and effect us, suddenly keeps lingering around our ears, sticking to our minds, telling us we aren’t capable, or worthy.<br></br>
            self-love is hard, but i try to not fail, because it is something you’ll have tough time building, but once you’ve built it, it’s a treasure worth building.<br></br>
            if you are feeling empty, lonely and left out, you must remember you have yourself. i agree we need to talk to something, to someone, there are people out there ready to listen. maybe not all, but a few bunch that knows how much it is needed to let our feelings out of the box where it has been suffocating and locked.<br></br>
            there will be times you’ll feel like crying, tearing apart without any reason, and once you tear up every reason appears. it is when you have to strenghten yourself by crying and letting out the pain, because the more you hold it in, the more it wants to be set free.<br></br>
            i just want you to know, it’ll pass away, every phase.<br></br>
            so be strong, keep yourself updated about your feelings, cry when you need to, let it out. share some love with yourself and you’ll be happy.<br></br>
        </p>
        
      </div>
    </div>

    </>
  );
}
