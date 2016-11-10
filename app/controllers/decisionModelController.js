angular.module('decisionguidanceapp', [])
		.controller('DecisionModelController', ['$http', function($http){
	
			var decisionModel = this;
			decisionModel.category = {};
			decisionModel.category.title = "Micorservices";
			

			$http.get("example.json").success(function(data){
				decisionModel.category.models = data;
			});


			this.showSelectValue = function(mySelect){
				return mySelect;
			}
	
	}])
	.controller('paginationCtrl', function(){
		this.totalItems = 10;
		this.currentPage = 4;

		this.setPage = function(pageNo){
			this.currentPage = pageNo;
		};

		this.maxSize=5;
		this.bigTotalItems = 175;
		this.bigCurrentPage = 1;
	});



