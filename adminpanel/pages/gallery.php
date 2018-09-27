<section id="gallery" ng-controller="uploadController">
	<div class="my-container">
			<form name="galleryForm" ng-submit="onSubmit($event.target)">
			    <div class="form-group">
			      <label for="title">Title:</label>
			      <input type="title" class="form-control" id="title" placeholder="Enter gallery title" name="title" ng-model="galData.title" required>
			    </div>
			    <div class="form-group">
			      <label for="Description">Description:</label>
			      <textarea id="Description" placeholder="Description" class="form-control" ng-model="galData.description" required></textarea>
			    </div>
			    <div class="form-group">
			    	<div class="custom-file">
					    <input type="file" name="images" class="custom-file-input" id="customFile" gallery ng-model="galData.image" required>
					    <label class="custom-file-label" for="customFile">Choose file</label>
					</div>
			    </div>
			    <button type="submit" class="btn btn-primary" ng-disabled="!galleryForm.$valid" ng-class="{'disabled':!galleryForm.$valid}">Submit</button>
			</form>
	</div>
</section>