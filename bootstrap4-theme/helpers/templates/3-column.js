import React from "react";

export default (content) => {
  return (
    <div class="container py-5">
      <div class="row">
        <div class="col-4">
          {content}
        </div>
        <div class="col-4">
          {content}
        </div>
        <div class="col-4">
          {content}
        </div>
      </div>
    </div>
  )
}