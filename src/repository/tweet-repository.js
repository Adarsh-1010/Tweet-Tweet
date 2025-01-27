const Tweet=require('../models/tweet');

class TweetRepository{
    async create(){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async update(tweetId,data){
        try {
        const tweet=await Tweet.findByIdAndUpdate(tweetId,data);
        return tweet;
        } catch (error) {
            console.log(error);  
        }
    }
    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports=TweetRepository;  