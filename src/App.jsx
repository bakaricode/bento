import aiImage from './assets/illustration-ai-content.webp';
import audienceGrowthImage from './assets/illustration-audience-growth.webp';
import consistentScheduleImage from './assets/illustration-consistent-schedule.webp';
import createPostImage from './assets/illustration-create-post.webp';
import fiveStarImage from './assets/illustration-five-stars.webp';
import growFollowersImage from './assets/illustration-grow-followers.webp';
import multiplePlatformsImage from './assets/illustration-multiple-platforms.webp';
import schedulePostsImage from './assets/illustration-schedule-posts.webp';
// import { defineConfig } from 'vite';

function App() {
  return (
    <div>

      <div className="cardContainer" >

        <div className="card card1" id="fiveStar">
          <p className="textPreset1">Social Media <span className="yellow">10x</span> <em>Faster</em> with AI</p>
          <img src={fiveStarImage} alt="Five star rating!" />
          <p className="textPreset4">Over 4,000 5-star reviews</p>
        </div>

        <div className="card card2" id="MultiplePlatformsImage">
          <img src={multiplePlatformsImage} alt="Social media Icons" />
          <p className="textPreset2">Manage mutiple accounts and platforms.</p>
        </div>

        <div className="card card3" id="consistentScheduleImage">
          <p className="textPreset3">Maintain a consistent posting schedule</p>
          <img src={consistentScheduleImage} alt="Scheduling calander" />
        </div>

        <div className="card card4" id="schedulePostsImage">
          <p className="textPreset3">Schedule to social media.</p>
          <img src={schedulePostsImage} alt="Graph monitoring social media interactions" />
          <p className="textPreset4">Optimize post timings to publish content at the perfect time for your audience</p>
        </div>

        <div className="card card5" id="growFollowersImage">
          <img src={growFollowersImage} alt="Graph tracking social media follower growth" />
          <p className="textPreset2">Grow followers with non-stop content</p> 
        </div>

        <div className="card card6" id="audienceGrowthImage">
          <p className="textPreset2">&#62;56%</p>
          <p className="textPreset4">faster audience growth</p>
          <img src={audienceGrowthImage} alt="Social media avitar icons" />
        </div>

        <div className="card card7" id="createPostImage">
          <p className="textPreset2">create and schedule content <em className="purple">quicker.</em></p>
          <img src={createPostImage} alt="Image of create post button" />
        </div>

        <div className="card card8" id="aiImage">
          <p className="textPreset2">Write your content using AI.</p>
          <img src={aiImage} alt="Example of AI assisting with conttent creation" />
        </div>

      </div>
      
    </div>
  );
}

export default App;
// export default defineConfig({
//   build: {
//     rollupOptions: {
//       external: ['react-router-dom']
//     }
//   }
// });