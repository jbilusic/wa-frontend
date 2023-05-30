<template>   
<div class="comments-section">
  <h2>Komentari (255)</h2>
  <ul>
    <li>
      <div class="comment">
        <img src="https://via.placeholder.com/50" alt="Avatar" />
        <div class="comment-body">
          <h3 class="comment-author">{{ comments.user.username}}</h3>
          <p class="comment-text">
            {{ comments.user.content}}
          </p>
          
          <span class="comment-date">{{ comments.user.date}}</span>
          <div class="comment-actions">
            <div class="comment-actions2">
                <div class="comment-action like"><i class="fas fa-thumbs-up"></i>{{ comments.user.likes}}</div>
                 <div class="comment-action dislike"><i class="fas fa-thumbs-down"></i>{{ comments.user.dislikes}}</div>
            </div>
            <div class="comment-action reply"><i class="fas fa-reply"></i>Reply</div>
            </div>
        </div>
      </div>
    </li>
    <li>
      <div class="comment">
        <img src="https://via.placeholder.com/50" alt="Avatar" />
        <div class="comment-body">
          <h3 class="comment-author">{{ comments.user2.username}}</h3>
          <p class="comment-text">
            {{ comments.user2.content}}
          </p>
          <span class="comment-date">{{ comments.user2.date}}</span>
          <div class="comment-actions">
            <div class="comment-actions2">
                <div class="comment-action like"><i class="fas fa-thumbs-up"></i>{{ comments.user2.likes}}</div>
                <div class="comment-action dislike"><i class="fas fa-thumbs-down"></i>{{ comments.user2.dislikes}}</div>
            </div>
            <div class="comment-action reply"><i class="fas fa-reply"></i>Reply</div>
            </div>
        </div>
      </div>
    </li>
  </ul>
  <form>
    <h3>Napišite komentar</h3>
    <div class="form-group">
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment" required></textarea>
    </div>
    <div class="commentDiv">
        <button type="submit">Submit</button>
    </div>
    
  </form>
</div>


</template>

<script>
    export default{
        
        data(){
            return{
                   
                    comments:
                    {
                      user:{username:'User1',img:"", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                      date:"April 12, 2022", likes:10, dislikes:2},

                      user2:{username:'User2',img:"", content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
                      date:"May 5, 2022", likes:5, dislikes:1}
                        }
                    
            }
        }
    }
</script>


