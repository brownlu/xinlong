angular.module('xinlong.controller', [])
.controller('ChatsCtrl', function($scope,$http,$ionicLoading,$ionicPopover,$location,$timeout,CachedUser) {
  $scope.loginNot = function(){

    var customerId=sessionStorage.customerId;
    // alert(customerId);
    if(customerId == undefined ) {
      $location.path('/login');
    } else {
      $location.path("/me");
    }
  }

  $scope.showMsg = function(txt,$event) {
    var template = '<ion-popover-view style = "background-color:#ef473a !important;height:40px;margin-top:20px;width:150px;text-align:center;color:#fff;line-height:40px;font-size:16px;"  > ' + txt + ' </ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });
    $scope.popover.show($event);
    $timeout(function() {
      $scope.popover.hide();
    },1500);
  };


  $scope.loginData = {"username":"","password":""}

  $scope.doLogin = function($event) {
    if (!$scope.loginData.username) {
      $scope.showMsg('用户名不能为空',$event);
      return false;
    };
    if (!$scope.loginData.password) {
      $scope.showMsg('密码不能为空',$event);
      return false;
    };

    $ionicLoading.show({
       template: "正在登录..."
     });
    $http.post('http://localhost:8080/xinlong-server' + '/user/login.do',{},{params:{
      userName:$scope.loginData.username,
      password:$scope.loginData.password,
      }}).success(function(data) {
         $ionicLoading.hide();
         if (data.errorCode == 0) {
            $location.path('/me');
          }else{
              $scope.showMsg(data.errorMessage,$event);
          }

        });
   };
})

.controller('HomeCtrl', function($scope,$ionicPopover,$timeout,$http,$location,AboutService,ProductService) {
    
    $scope.loginNot = function(){

      var customerId=sessionStorage.customerId;
      // alert(customerId);
      if(customerId == undefined ) {
        $location.path('/login');
      } else {
        $location.path("/me");
      }
    }

    AboutService.getInitNewsDatas().then(function (data) {
      $scope.initNewsDatas = data;
    })

    ProductService.getInitProductDatas().then(function (data){
      $scope.initProductDatas = data;
    })
    $scope.showMsg = function(txt,$event) {
    var template = '<ion-popover-view style = "background-color:#ef473a !important;height:40px;margin-top:20px;width:150px;text-align:center;color:#fff;line-height:40px;font-size:16px;"  > ' + txt + ' </ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });
    $scope.popover.show($event);
    $timeout(function() {
      $scope.popover.hide();
    },1500);
  };

    $scope.successCol = function(id,$event) {
      $http.post('http://localhost:8080/xinlong-server/' + 'collection/addCollection.do',{},{params:{
       userId:1,
       productId:id,
        }}).success(function (data) {
       if (data.errorCode == 0) {
          $scope.showMsg('你已收藏成功',$event)
       } else {
          $scope.showMsg(data.errorMessage,$event)
       }
    });
    }

    $scope.successOrd = function(id,$event) {
      $http.post('http://localhost:8080/xinlong-server/' + 'consult/addConsult.do',{},{params:{
       userId:1,
       productId:id,
       realName:"李大大",
       phoneNumber:"11111111111"
        }}).success(function (data) {
       if (data.errorCode == 0) {
          $scope.showMsg('你已预约成功',$event)
       } else {
          $scope.showMsg(data.errorMessage,$event)
       }
    });
    }


})
.controller('MeCtrl',function($scope,ManagerService){
    ManagerService.getInitManagerDatas().then(function (data) {
      $scope.initManagerData = data;
    })
})
.controller('CollectCtrl',function($scope,$http,$ionicPopover,$timeout,CollectService){
    CollectService.getInitCollectDatas().then(function (data) {
      $scope.initCollectDatas = data;
      // if($scope.initCollectDatas.length == 0){
      //   alert(1);
      // }
    })
    $scope.showMsg = function(txt,$event) {
    var template = '<ion-popover-view style = "background-color:#ef473a !important;height:40px;margin-top:20px;width:150px;text-align:center;color:#fff;line-height:40px;font-size:16px;"  > ' + txt + ' </ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });
    $scope.popover.show($event);
    $timeout(function() {
      $scope.popover.hide();
    },1500);
  };

    $scope.cancelCol = function(id,$event) {
      $http.post('http://localhost:8080/xinlong-server/' + 'collection/delCollection.do',{},{params:{
       userId:1,
       productId:id,
        }}).success(function (data) {
       if (data.errorCode == 0) {
          $scope.showMsg('你已取消收藏成功',$event);
          $timeout(function(){
            document.getElementById("group-body-"+id).style.display = "none";
          },1000)
       } else {
          $scope.showMsg(data.errorMessage,$event)
       }
    });
    }

})
.controller('OrderCtrl',function($scope,OrderService){
    OrderService.getInitOrderDatas().then(function (data) {
      $scope.initOrderDatas = data;
    })
})
.controller('ProductCtrl',function($scope,$location,ProductService1){
    $scope.loginNot = function(){

      var customerId=sessionStorage.customerId;
      // alert(customerId);
      if(customerId == undefined ) {
        $location.path('/login');
      } else {
        $location.path("/me");
      }
    }
    ProductService1.getInitProductDatas1().then(function (data) {
      $scope.initProductDatas1 = data;
    })
})
