(function () {
    'use strict';

    var app = angular.module('main', []);
    app.controller('mainController', ['$filter', function ($filter) {
        var vm = this;
        vm.customerData = custdata;
        vm.filterdCustomerData = custdata;
        vm.searchText = '';
        vm.searchTextChanged = function () {
            
            if (vm.searchText == '') {
                vm.filterdCustomerData = custdata;
            }
            else {
                vm.filterdCustomerData = $filter('custFilter')(vm.customerData, vm.searchText)
            }
        }
       


    }]);
    app.filter('custFilter', function () {
       
        return function(customerData,filterText)
        {
            var filterData = [];
            for (var i = 0; i < customerData.length; i++)
            {
                var cust = customerData[i];
                if(cust.firstName.toLowerCase().indexOf(filterText.toLowerCase())>-1||
                    cust.lastName.toLowerCase().indexOf(filterText.toLowerCase())>-1||
                    cust.city.toLowerCase().indexOf(filterText.toLowerCase())>-1)
                {
                    filterData.push(cust);
                }
            }
            return filterData;
        }        
        
    });
})();