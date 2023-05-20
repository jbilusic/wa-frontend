<template>   
<div class="comments-section">
  <h2>Komentari (255)</h2>
  <ul>
    <li>
      <div class="comment">
        <img src="https://via.placeholder.com/50" alt="Avatar" />
        <div class="comment-body">
          <h3 class="comment-author">John Doe</h3>
          <p class="comment-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <span class="comment-date">April 12, 2022</span>
          <div class="comment-actions">
            <div class="comment-actions2">
                <div class="comment-action like"><i class="fas fa-thumbs-up"></i>10</div>
                 <div class="comment-action dislike"><i class="fas fa-thumbs-down"></i>2</div>
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
          <h3 class="comment-author">Jane Doe</h3>
          <p class="comment-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <span class="comment-date">May 5, 2022</span>
          <div class="comment-actions">
            <div class="comment-actions2">
                <div class="comment-action like"><i class="fas fa-thumbs-up"></i>5</div>
                <div class="comment-action dislike"><i class="fas fa-thumbs-down"></i>1</div>
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
                   
                    mainArticle:[
                    {
                            middleTitle:''
                        }
                    ]
            }
        }
    }
</script>


