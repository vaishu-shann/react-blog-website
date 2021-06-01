import "./singlePost1.css";

export default function SinglePost5() {
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/681467/pexels-photo-681467.jpeg?cs=srgb&dl=pexels-pedro-figueras-681467.jpg&fm=jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
             Don't feel alone when it is dark 
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
          <span>5 day ago</span>
        </div>
        <p className="singlePostDesc">
        We all are humans and we all go through phases in life that change us, that define us and that helps us to understand what life is all about, but then, there are times when life is rough and is filled with darkness where you don’t really understand what’s happening and you don’t seem to figure out a way to pull yourself out of the darkness. These are the most critical times where we lose ourself if we don’t hold on to the things that helps us to stay sane. And, during these times we don’t have anyone around us to help us and show the light.<br></br><br></br>

        We don’t want to trouble our loved ones, we don’t want to share it with people because we know they won’t understand, we find it uncomfortable to share it with our best friends because we don’t think it will bring any good to you. At the end of the day, we can only count on ourselves because no matter what ‘you have you, when you don’t have anyone else’. Only we understand our thoughts that haunt us at night, we have to trust ourselves because trusting people is temporary, they are not going to be with us no matter how much they love us because their priority will change someday, their feelings will fade away all of a sudden and one day they won’t love us either. Only we are truly capable of saving ourselves and giving ourselves a pathbreaking solution from something that’s pulling us backwards.<br></br><br></br>
        
        You gotta believe in yourself, your heart, your mind; even during the darkest days because you have gone through so much, you have faced so many challenges and that experience has filled yourself with it’s own share of light somewhere inside you which you have to find. You don’t need anyone to complete you when you can complete yourself. You don’t need to doubt yourself just because of certain people who constantly bash you, in fact they are helping you to know who you need to omit from your life. Count on yourself, stand for yourself and keep yourself ahead of anyone else.<br></br><br></br>
        
        slow down,
        learn from mistakes
        that you made
        unknowingly or knowingly,
        because you are filled
        with your own share of sunshine
        that will help you
        to pull out of the darkness
        and cleanse your heart,
        slow down.
                
        </p>
      </div>
    </div>

    </>
  );
}
