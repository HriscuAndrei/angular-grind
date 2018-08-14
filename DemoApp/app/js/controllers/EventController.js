'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $http) {

        var onUserComplete = function (response) {
            $scope.user = response.data;
        };
        $http.get("https://api.publicapis.org/categories")
            .then(onUserComplete);
        var today = new Date();
        $scope.sortorder = 'name';
        $scope.snippet = '<span style="color:red">Hi there<span/>';
        $scope.booleanValue = true;
        $scope.mystyle = { color: 'red' };
        $scope.myclass = "blue";
        $scope.buttonDisabled = false;
        $scope.buttonSelected = true;
        $scope.event = {
            name: 'My first Angular App',
            date: today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate(),
            time: 'after a coffee and lunch',
            location: {
                address: 'Maxcode',
                city: 'Iasi',
                country: 'Romania'
            },
            imageUrl: '/img/maxcode-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Andrei Hriscu',
                    duration: '7 hours',
                    level: 'Advanced',
                    abstract: 'In this session I hope I will learn how the directives works.',
                    upVoteCount: 0
                },
                {
                    name: 'AScopes for fun and profit',
                    creatorName: 'Sorin Apreutesei',
                    duration: '5 hours',
                    level: 'Introductory',
                    abstract: 'This session will be about making fun out of Sorin.',
                    upVoteCount: 0
                },
                {
                    name: 'BWell behave controllers',
                    creatorName: 'Andrei Hriscu',
                    duration: '5 hours',
                    level: 'Intermediate',
                    abstract: 'This session will be about controllers.',
                    upVoteCount: 0

                }
            ]
        }
        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);

