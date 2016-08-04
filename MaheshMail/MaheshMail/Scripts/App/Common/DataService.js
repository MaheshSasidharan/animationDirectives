Mail

.factory('Factory_DataService', ['$rootScope', '$http', 'Factory_Constants', 'Factory_CommonRoutines', DataService])

function DataService($rootScope, $http, Constants, CommonFactory) {
    var Helper = {
        app: "/DemoApp/",
        Mail: {
            controller: "Mail/",
            SearchByCodeName: function (sLName, sFName) {
                return $http.get(Helper.app + Helper.Mail.controller + 'SearchByCodeName?sLName=' + sLName + '&sFName=' + sFName)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            GetARCycle: function () {
                return $http.get(Helper.app + Helper.Mail.controller + 'GetARCycle')
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            // Checklist
            GetChecklist: function (nPersonID, sAR_Cycle) {
                return $http.get(Helper.app + Helper.Mail.controller + 'GetChecklist?nPersonID=' + nPersonID + '&sAR_Cycle=' + sAR_Cycle)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveChecklist: function (oChecklist) {
                return $http.post(Helper.app + Helper.Mail.controller + 'SaveChecklist', { oSaveItem: oChecklist })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveChecklistDetail: function (oChecklist) {
                return $http.post(Helper.app + Helper.Mail.controller + 'SaveChecklistDetail', { oSaveItem: oChecklist })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            DeleteChecklist: function (nActionID) {
                return $http.delete(Helper.app + Helper.Mail.controller + 'DeleteChecklist?nActionID=' + nActionID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            // External reviewers
            GetReviewers: function (nPersonID, sAR_Cycle) {
                return $http.get(Helper.app + Helper.Mail.controller + 'GetReviewers?nPersonID=' + nPersonID + '&sAR_Cycle=' + sAR_Cycle)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            DeleteReview: function (nERID) {
                return $http.delete(Helper.app + Helper.Mail.controller + 'DeleteReview?nERID=' + nERID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveReview: function (oReview) {
                return $http.post(Helper.app + Helper.Mail.controller + 'SaveReview', { oSaveItem: oReview })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveReviewer: function (oReviewer) {
                return $http.post(Helper.app + Helper.Mail.controller + 'SaveReviewer', { oSaveItem: oReviewer })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SearchByCodeNameReviewer: function (sLName, sFName) {
                return $http.get(Helper.app + Helper.Mail.controller + 'SearchByCodeNameReviewer?sLName=' + sLName + '&sFName=' + sFName)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            // Rank History
            GetRankHistory: function (nPersonID) {
                return $http.get(Helper.app + Helper.Mail.controller + 'GetRankHistory?nPersonID=' + nPersonID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
            SaveAppointmentHistory: function (oAppointmentHistory) {
                return $http.post(Helper.app + Helper.Mail.controller + 'SaveAppointmentHistory', { oSaveItem: oAppointmentHistory })
                  .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },// Review History
            GetReviewHistory: function (nPersonID) {
                return $http.get(Helper.app + Helper.Mail.controller + 'GetReviewHistory?nPersonID=' + nPersonID)
                .then(
                Helper.Miscellaneous.ReturnDataDotData,
                Helper.Miscellaneous.FailedInService)
            },
        },
        Miscellaneous: {
            oMail: null,
            BroadCastOnPerson: function (data) {
                this.oMail = data;
                $rootScope.$broadcast('person:updated', data);
            },
            ReturnDataDotData: function (data) {
                return data.data;
            },
            FailedInService: function () {
                CommonFactory.Notification.ShowNotification(true, Constants.Miscellaneous.SomethingWentWrong, Constants.Miscellaneous.Notification.Type.Danger);
            }
        }
    }

    var oService = {
        // Annual Review
        oMail: Helper.Miscellaneous.oMail,
        SearchByCodeName: Helper.Mail.SearchByCodeName,
        BroadCastOnPerson: Helper.Miscellaneous.BroadCastOnPerson,
        GetARCycle: Helper.Mail.GetARCycle,
        GetChecklist: Helper.Mail.GetChecklist,
        SaveChecklist: Helper.Mail.SaveChecklist,
        SaveChecklistDetail: Helper.Mail.SaveChecklistDetail,
        DeleteChecklist: Helper.Mail.DeleteChecklist,
        GetReviewers: Helper.Mail.GetReviewers,
        DeleteReview: Helper.Mail.DeleteReview,
        SaveReview: Helper.Mail.SaveReview,
        SaveReviewer: Helper.Mail.SaveReviewer,
        SearchByCodeNameReviewer: Helper.Mail.SearchByCodeNameReviewer,
        GetRankHistory: Helper.Mail.GetRankHistory,
        SaveAppointmentHistory: Helper.Mail.SaveAppointmentHistory,
        GetReviewHistory: Helper.Mail.GetReviewHistory
    }
    return oService;
}