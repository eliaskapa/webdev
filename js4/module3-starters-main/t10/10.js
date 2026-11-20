'use strict'

const kohde = document.getElementById("target");

const lomake = document.querySelector("form");

const EtuInput = document.querySelector('input[name="firstname"]');

const SukuInput = document.querySelector('input[name="lastname"]');

lomake.addEventListener('submit', function (evt)
{evt.preventDefault();

const firstname = EtuInput.value;

const lastname = SukuInput.value;


kohde.textContent = `nimesi on ${firstname} ${lastname}`});
