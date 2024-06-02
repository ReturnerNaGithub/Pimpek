// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";

contract Wagiesused is ERC721, ERC721URIStorage, AutomationCompatibleInterface {
    using Counters for Counters.Counter;

    Counters.Counter public tokenIdCounter;
 
   // Metadata information for each stage of the NFT on IPFS.
    string[] IpfsUri = [
        "https://indigo-urban-mule-142.mypinata.cloud/ipfs/Qmbegb88oMxeWSmJw1YicihLBQdgCY4botNaoqxcrWQVK8/wagiesjson.json_MConverter.eu.json",
        "https://indigo-urban-mule-142.mypinata.cloud/ipfs/Qmbegb88oMxeWSmJw1YicihLBQdgCY4botNaoqxcrWQVK8/usedvagies.json",
        "https://indigo-urban-mule-142.mypinata.cloud/ipfs/Qmbegb88oMxeWSmJw1YicihLBQdgCY4botNaoqxcrWQVK8/usedvagies.json"
    ];

    uint public immutable interval;
    uint public lastTimeStamp;

    constructor(uint updateInterval) ERC721("Wagies", "WAG") {
        interval = updateInterval;
        lastTimeStamp = block.timestamp;
        safeMint(msg.sender);
    }

    function safeMint(address to) public {
        uint256 tokenId = tokenIdCounter.current();
        tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, IpfsUri[0]);
    }

    // determine the stage of the wagies damaged
    function wagiesStage(uint256 _tokenId) public view returns (uint256) {
        string memory _uri = tokenURI(_tokenId);
        // Seed
        if (compareStrings(_uri, IpfsUri[0])) {
            return 0;
        }
        // Sprout
        if (
            compareStrings(_uri, IpfsUri[1])
        ) {
            return 1;
        }
        // Must be a Wetting
        return 2;
    }

    function wettingWagies(uint256 _tokenId) public {
        if(wagiesStage(_tokenId) >= 2){return;}
        // Get the current stage of the damaging wagies and add 1
        uint256 newVal = wagiesStage(_tokenId) + 1;
        // store the new URI
        string memory newUri = IpfsUri[newVal];
        // Update the URI
        _setTokenURI(_tokenId, newUri);
    }

    // helper function to compare strings
    function compareStrings(string memory a, string memory b)
        public pure returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory /* performData */) {
        if ((block.timestamp - lastTimeStamp) > interval ) {
            uint256 tokenId = tokenIdCounter.current() - 1;
            if (wagiesStage(tokenId) < 2) {
                upkeepNeeded = true;
            }
        }
        // We don't use the checkData in this example. The checkData is defined when the Upkeep was registered.
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        if ((block.timestamp - lastTimeStamp) > interval ) {
            uint256 tokenId = tokenIdCounter.current() - 1;
            if (wagiesStage(tokenId) < 2) {
                lastTimeStamp = block.timestamp;            
                wettingWagies(tokenId);
            }
        }
        // We don't use the performData in this example. The performData is generated by the Automation's call to your checkUpkeep function
    }
    
    function tokenURI(uint256 tokenId)
        public view override(ERC721, ERC721URIStorage) returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    // The following function is an override required by Solidity.
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

}