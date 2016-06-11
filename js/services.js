angular.module('xinlong.service', [])

.factory('Chats', function() {
  var chats = [];

  return {
    all: function() {
      return chats;
    }
  };
})


.factory('CachedUser', function() {
  var userInfo = {};

  return {
    save: function(j) {
      for (var k in j) {
        window.localStorage[k] = userInfo[k] = j[k];
      };
      return userInfo;
    },

    remove: function(f) {
      if(f.constructor==Array){
        for(var i=0;i<f.length;i++){
          window.localStorage.removeItem(f[i]);
        }
      }
        window.localStorage.removeItem(f);
    },

    add: function(k, v) {
      window.localStorage[k] = userInfo[k] = v;
    },

    addLong: function(k, v) {
      window.localStorage[k] = v;
    },

    l: window.localStorage
  };
})
.factory('AboutService', function ($q,$timeout,$http) {

    var initNewsDatas = null;
    function getInitNewsDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'news/getNewsList.do',{},{params:{
       type:0,
       pageNum:1,
       pageSize:4
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initNewsDatas=data.result;

        deferred.resolve(initNewsDatas)

        console.log(initNewsDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getNewsDataById (newsId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashData = {};
      console.log(newsId);

      for(var key in initNewsDatas){
        if(initNewsDatas[key].newsId == newsId){
          dashData = initNewsDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashData.newsId){
          deferred.resolve(dashData)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitNewsDatas:getInitNewsDatas,
      getNewsDataById:getNewsDataById
    }
  })

.factory('ProductService', function ($q,$timeout,$http) {

    var initProductDatas = null;
    function getInitProductDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'product/getProductList.do',{},{params:{
       productType:1,
       pageNum:1,
       pageSize:2,
       isRecommand:1,
       userId:1
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initProductDatas=data.result;

        deferred.resolve(initProductDatas)

        console.log(initProductDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getProductDataById (productId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashDataP = {};
      console.log(productId);

      for(var key in initProductDatas){
        if(initProductDatas[key].productId == productId){
          dashDatap = initProductDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashDatap.productId){
          deferred.resolve(dashDatap)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitProductDatas:getInitProductDatas,
      getProductDataById:getProductDataById
    }
  })
// 经理列表
.factory('ManagerService', function ($q,$timeout,$http) {

    var initManagerDatas = null;
    function getInitManagerDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'servicemanager/getServicemanagerList.do',{},{params:{
       pageNum:1,
       pageSize:1,
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initManagerDatas=data.result;

        deferred.resolve(initManagerDatas)

        console.log(initManagerDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getManagerDataById (managerId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashDataM = {};
      console.log(managerId);

      for(var key in initManagerDatas){
        if(initManagerDatas[key].managerId == managerId){
          dashDataM = initManagerDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashDataM.managerId){
          deferred.resolve(dashDataM)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitManagerDatas:getInitManagerDatas,
      getManagerDataById:getManagerDataById
    }
  })
// 收藏列表
.factory('CollectService', function ($q,$timeout,$http) {

    var initCollectDatas = null;
    function getInitCollectDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'product/getMyProductList.do',{},{params:{
       userId:1,
       pageNum:1,
       pageSize:5,
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initCollectDatas=data.result;

        deferred.resolve(initCollectDatas)

        console.log(initCollectDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getCollectDataById (userId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashDataC = {};
      console.log(userId);

      for(var key in initCollectDatas){
        if(initCollectDatas[key].userId == userId){
          dashDataC = initCollectDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashDataC.userId){
          deferred.resolve(dashDataC)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitCollectDatas:getInitCollectDatas,
      getCollectDataById:getCollectDataById
    }   
  })
// 预约列表
.factory('OrderService', function ($q,$timeout,$http) {

    var initOrderDatas = null;
    function getInitOrderDatas (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'product/getMyconsultproductionList.do',{},{params:{
       userId:100,
       pageSize:4,
       pageNum:1,
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initOrderDatas=data.result;

        deferred.resolve(initOrderDatas)

        console.log(initOrderDatas);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getOrderDataById (userId){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashDataO = {};
      console.log(userId);

      for(var key in initOrderDatas){
        if(initOrderDatas[key].userId == userId){
          dashDataO = initOrderDatas[key];
          break;
        }
      }
      $timeout(function () {
        if(dashDataO.userId){
          deferred.resolve(dashDataO)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitOrderDatas:getInitOrderDatas,
      getOrderDataById:getOrderDataById
    }
  })
// 产品列表
.factory('ProductService1', function ($q,$timeout,$http) {

    var initProductDatas1 = null;
    function getInitProductDatas1 (){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法

    $http.post('http://localhost:8080/xinlong-server/' + 'product/getProductList.do',{},{params:{
       productType:1,
       pageSize:5,
       pageNum:1,
       isRecommand:1,
       userId:1
    }}).success(function (data) {
       if (data.errorCode == 0) {
        initProductDatas1=data.result;

        deferred.resolve(initProductDatas1)

        console.log(initProductDatas1);
       };
    });



/*      $timeout(function () {
        deferred.resolve(initNewsDatas)
      },1000)*/
      return deferred.promise;
    }


    function getProductDataByType (productType){
      var deferred = $q.defer();
      //模拟网络请求，实际项目应该使用$http.jsonp等方法
      var dashDataPr = {};
      console.log(productType);

      for(var key in initProductDatas1){
        if(initProductDatas1[key].productType == productType){
          dashDataPr = initProductDatas1[key];
          break;
        }
      }
      $timeout(function () {
        if(dashDataPr.productType){
          deferred.resolve(dashDataPr)
        }
      },1000)
      return deferred.promise;
    }
    return{
      getInitProductDatas1:getInitProductDatas1,
      getProductDataByType:getProductDataByType
    }
  })