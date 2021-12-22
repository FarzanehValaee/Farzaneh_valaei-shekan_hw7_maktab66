class Media{
        constructor(name,publisher,subject,language,publicationDate,multiPart,ageLine,usingType){
              this.name=name
              this.publisher=publisher
              this.subject=subject
              this.language=language
              this.publicationDate=publicationDate
              this.multiPart=multiPart
              this.ageLine=ageLine
              this.usingType=usingType
        }
}
//_________________________________________________________________
class Film extends Media{
    constructor(name,publisher,subject,language,publicationDate,timeSpan,subtitle,filmType,seasonNumber,partNumber,multiPart,ageLine,usingType,colorfull){
     super(name,publisher,subject,language,publicationDate,multiPart,ageLine,usingType)
     this.timeSpan = timeSpan
     this.subtitle=subtitle
     this.filmType=filmType
     this.seasonNumber=seasonNumber
     this.partNumber=partNumber
     this.colorfull=colorfull
    }
    play(){
        let pause=false
        let passTime=0
        while((!pause)&&(passTime!== this.timeSpan)){
            passTime+=1
            pause=Number(prompt("pause?"))
        }
        pause=true
        if(pause){
            let mss
            passTime===this.timeSpan ? mss="film is finished":mss="film is paused"
            let remainTime = this.timeSpan-passTime
            return{
                mss,
                passTime,
                remainTime
            }
        }
        else{
            return "film is finished"
        }
    }
     
}
let Dark = new Film('Dark','NetFlix','Drama_mystery','Dutch','2017/12/1',80,true,'series',3,26,true,'A','watching',true)
console.log(Dark)
console.log(Dark.play())

//_________________________________________________________________
class Book extends Media{
          constructor(name,publisher,subject,language,pagenumber,partNumber,publicationDate,multiPart,ageLine,usingType,colorfull){
                    super(name,publisher,subject,language,publicationDate,multiPart,ageLine,usingType)
                    this.pagenumber=pagenumber
                    this.partNumber=partNumber
                    this.colorfull=colorfull
          }
        read(){
            let nextPage=true
            let pageReading=0
            while((nextPage)&&(pageReading!==this.pagenumber)){
                pageReading+=1
                nextPage=Number(prompt("nextpage?"))
            }
            if(!nextPage){
                let mss
                pageReading===this.pagenumber ? mss="book is finished":mss="book is unfinished"
                let remainPage = this.pagenumber-pageReading
                return{
                    mss,
                    pageReading,
                    remainPage
                }
            }
            else{
                return"book is finished"
            }
        }

}
let littlePrincess = new Book('little princess','','story','english',50,1,'2015/01/01',false,'B','reading',false)
console.log(littlePrincess)
console.log(littlePrincess.read())
//_________________________________________________________________
class Podcast extends Media{
        constructor(name,publisher,subject,language,publicationDate,timeSpan,multiPart,ageLine,usingType){
          super(name,publisher,subject,language,publicationDate,multiPart,ageLine,usingType)
             this.timeSpan=timeSpan
        }
    play(){
        let pause=false
        let passTime=0
        while((!pause)&&(passTime!== this.timeSpan)){
            passTime+=1
            pause=Number(prompt("pause?"))
        }
        pause=true
        if(pause){
            let mss
            passTime===this.timeSpan ? mss="Podcast is finished":mss="Podcast is paused"
            let remainTime = this.timeSpan-passTime
            return{
                mss,
                passTime,
                remainTime
            }
        }
        else{
            return "Podcast is finished"
        }
    }    
}
let podcast1= new Podcast('somthing','someOne','self knowledge','farsi','1400/01/05',3,false,'A','listening')
console.log(podcast1)
console.log(podcast1.play())
//_________________________________________________________________
class Website extends Media{
          constructor(name,url,publisher,subject,language,publicationDate,multiPart,ageLine,usingType){
           super(name,publisher,subject,language,publicationDate,multiPart,ageLine,usingType)
           this.url=url
    
          }
}
let leetCode=new Website('leet code','https://leetcode.com/','','programming','english','2015',false,'any','coding')
console.log(leetCode)