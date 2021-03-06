﻿var Mail = angular.module('Mail', ['ngRoute']);

Mail
    .config(function ($sceProvider) {
        // Completely disable SCE.  For demonstration purposes only!
        // Do not use in new projects.
        $sceProvider.enabled(false);
    })
//.controller('LayoutPage', ['$scope', '$timeout', '$location', '$window', 'Factory_CommonRoutines', 'Factory_Constants', LayoutPage])
.controller('LayoutPage', ['$scope', '$timeout', '$interval', '$location', '$window', LayoutPage])


function LayoutPage($scope, $timeout, $interval, $location, $window) { //, CommonFactory, Constants) {
    //CommonFactory.Init($timeout, Constants);
    // $scope.Notification = CommonFactory.Notification;

    var vm = this;

    vm.dynamicCondition = false;

    $interval(function () {
        vm.dynamicCondition = !vm.dynamicCondition;
    }, 2000);


    var sCurrentTile;
    var sPreviousTile;
    vm.oCurrentTile = null;
    vm.oCurrentInnerTile = null;
    var bRefresh = true;
    var displayTile = null;


    vm.Tiles = [
        {
            tileCount: 1,
            back: "Plain VS Embellished",
            front: "Comparison",
            innerContents: [{
                title: "Experiment",
                content: "<div>Designed an experiment to investigate differences in <ul><li>Comprehension</li><li>Recall</li></ul><br/>Used 14 embellished charts and created corresponding plane charts with same information (including type of chart, titles, axis labels, axis values)</div>"
            },
            {
                title: "Participants",
                content: "<ui><li>20 participants - 9 males, 11 females</li><li>Age - Between 18 to 40 </li><li>Education - 7 Graduates, 13 Undergraduates</li></ui>"
            }, {
                title: "Apparatus",
                content: "<ui><li>24-inch widescreen monitor</li><li>Tobii eye  tracker to capture eye-gaze data</li></ui>",
                url: "http://i.imgur.com/mzo75D0.jpg"
            }
            ]
        },
        {
            tileCount: 2,
            back: "Analyze the charts",
            front: "Reading Rask",
            innerContents: [{
                title: "Cigrettes",
                url: "http://i.imgur.com/G1e1E5p.png",
            },
            {
                title: "Cosmetics",
                url: "http://i.imgur.com/btgf6qr.png",
            },
            {
                title: "Diamonds",
                url: "http://i.imgur.com/2U3YjSo.jpg",
            },
            {
                title: "Employment",
                url: "http://i.imgur.com/8BoDspw.png",
            },
            {
                title: "Cost",
                url: "http://i.imgur.com/6inlMi7.jpg"
            }]
        },
        {
            back: "Questions",
            front: "Description Task",
            innerContents: [{
                title: "Question 1",
                content: "What  is  the  chart  is about?"
            }, {
                title: "Question 2",
                content: "What  are  the  displayed  categories  and values?"
            }, {
                title: "Question 3",
                content: "What is the basic trend of the graph?"
            }, {
                title: "Question 4",
                content: "Is the author trying to communicate some message through the chart?"
            }]
        }

    ];

    var showContact = $location.search().contact;
    showContact = showContact === "y" ? true : false;


    if (showContact) {

        var contact = {
            back: "Yellow Page",
            front: "Contact",
            innerContents: [{
                title: "Facebook",
                content: "<a href='https://www.facebook.com/mahesh.sasidharan' class='button-link' target='_blank'></a>"
            }, {
                title: "Twitter",
                content: "<a href='https://twitter.com/blinddoc' class='button-link' target='_blank'></a>"
            }, {
                title: "Instagram",
                content: "<a href='https://www.instagram.com/theblinddoc/' class='button-link' target='_blank'></a>"
            }, {
                title: "Google Plus",
                content: "<a href='https://plus.google.com/u/0/111874564643552738091/posts' class='button-link' target='_blank'></a>"
            }, {
                title: "LinkedIn",
                content: "<a href='https://www.linkedin.com/in/maheshsasidharan' class='button-link' target='_blank'></a>"
            }, {
                title: "Stackoverflow",
                content: "<a href='http://stackoverflow.com/users/1161370/mahesh' class='button-link' target='_blank'></a>"
            }]
        }

        vm.Tiles.push(contact);
    }
    vm.Helper = {
        ShowData: function (oitem) {
            if (sCurrentTile === undefined) {
                sCurrentTile = oitem.tileCount;
                sPreviousTile = sCurrentTile;
                bRefresh = true;
            }
            else {
                sCurrentTile = oitem.tileCount;
                bRefresh = sCurrentTile === sPreviousTile ? false : true;
                sPreviousTile = sCurrentTile;
            }
            if (bRefresh) {
                //angular.element(".Bottom_Left_Wrapper").find(".Bottom_LeftShow").removeClass('Bottom_LeftShow').addClass('Bottom_LeftHide');

                vm.oCurrentInnerTile = null;
                vm.oCurrentTile = oitem;
                if (oitem.innerContents) {
                    for (var index in oitem.innerContents) {
                        oitem.innerContents[index].innerTileStyle = oitem.innerContents[index].innerTileStyle ? oitem.innerContents[index].innerTileStyle + " roundTileInit" : " roundTileInit";
                        var tempIndex = index;
                        $timeout(function () {
                            oitem.innerContents[tempIndex].innerTileStyle.replace(' roundTileInit', '');
                        }, 100);
                    }
                }
            }
        },
        ShowTileData: function (oItem) {
            vm.oCurrentInnerTile = oItem;
            oItem.innerTileStyle = null;
            oItem.innerTileStyle = 'roundTileClicked InnerTileAnimationClick';
            vm.class_bottomLeft = 'Bottom_LeftHide';
            $timeout(function () {
                vm.class_bottomLeft = 'Bottom_LeftShow';
            }, 10);
            $timeout(function () {
                oItem.innerTileStyle.replace(' InnerTileAnimationClick', '');
            }, 100);
        }
    }
}

