// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Seamless {
    address payable public owner;

    struct ScoreCard {
        uint runs;
        uint streak;
        uint points;
    }

    mapping(address => ScoreCard) public scores;

    event Activity(address user, string name, uint runs, uint points);

    constructor() {
        owner = payable(msg.sender);
    }

    function awardScore(uint _runs, uint _points, address _to) internal returns (ScoreCard memory) {
        scores[_to].runs += _runs;
        scores[_to].points += _points;

        return scores[_to];
    }

    function performActivity(address _user, string memory _activityName, uint _runs, uint _points) public returns (ScoreCard memory) {
        emit Activity(_user, _activityName, _runs, _points);
        
        ScoreCard memory updatedScoreCard = awardScore(_runs, _points, _user);
        return updatedScoreCard;
    }
}
