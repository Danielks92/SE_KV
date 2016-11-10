/**
 * Created by Alex on 26.10.2016.
 */

'use strict';

app
    .controller('ModelFormController', ModelFormController);

ModelFormController.$inject = [];

/**
 *  Controller to manage the form to create a model
 */
function ModelFormController()
{
    // vm = viewModel -> avoid "this" reference problems
    var vm = this;

    vm.serviceDiscoveryName = "Service Discovery Name";
    vm.serviceDiscoveryDescription = "Description";

    vm.requirementsArray = ["Requirement 1"];
    vm.implicationsArray = ["Implication 1"];
    vm.addressedRequirementsArray = ["Addressed Requirements 1"];
    vm.affectedGMArray = ["Affected Guidance Models 1"];
    vm.requiredCompArray = ["Required Components 1"];


    vm.addRequirement = function(index)
    {
        vm.requirementsArray.push("Requirement " + index);
    }

    vm.removeRequirement = function(index)
    {
        // the first requirement is not removable
        if(index > 0)
            vm.requirementsArray.splice(index, 1);
    }

    vm.addImplication = function(index)
    {
       vm.implicationsArray.push("Implication " + index);
    }

    vm.removeImplication = function(index)
    {
        // the first implication is not removable
        if(index > 0)
            vm.implicationsArray.splice(index, 1);
    }

    vm.addAddressedRequirement = function(index)
    {
        vm.addressedRequirementsArray.push("Addressed Requirements " + index);
    }

    vm.removeAddressedRequirement = function(index)
    {
        // the first addressed requirement is not removable
        if(index > 0)
            vm.addressedRequirementsArray.splice(index, 1);
    }

    vm.addAffectedGM = function(index)
    {
        vm.affectedGMArray.push("Affected Guidance Models " + index);
    }

    vm.removeAffectedGM = function(index)
    {
        // the first affected guidance model is not removable
        if(index > 0)
            vm.affectedGMArray.splice(index, 1);
    }

    vm.addRequiredComp = function(index)
    {
        vm.requiredCompArray.push("Required Components " + index)
    }

    vm.removeRequiredComp = function(index)
    {
        // the first required componente is not removable
        if(index > 0)
            vm.requiredCompArray.splice(index, 1);
    }

    vm.addDesignOption = function(index)
    {
        //ToDo
    }

    vm.removeDesignOption = function(index)
    {
        //ToDo
    }
}